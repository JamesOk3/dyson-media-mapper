import supabase, {supabase2, supabaseUrl} from "./supabase.js";

/**
 * Function to create a new user with the provided information and update the database.
 *
 * @param {String} firstName - The first name of the user.
 * @param {String} lastName - The last name of the user.
 * @param {String} email - The email of the user.
 * @param {String} password - The password of the user.
 * @param {String} phoneNumber - The phone number of the user.
 * @param {String} dob - The date of birth of the user.
 * @param {String} gender - The gender of the user.
 * @param {String} address - The address of the user.
 * @param {String} city - The city of the user.
 * @param {String} postcode - The postcode of the user.
 * @param {String} country - The country of the user.
 * @param {String} role - The user role in the system.
 *
 * @throws {Error} If the operation fails
 * @returns {Promise<Object>} The newly created user
 *
 * @author James M Kambanga
 * Date: April 10, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

export async function createUser({firstName, lastName, email, password, phoneNumber, dob, gender, address, city, postcode, country, role})
{
    const { data, error } = await supabase2.auth.signUp({
        email,
        password,
        options: {
            data: {
                firstName,
                lastName,
                phoneNumber,
                dob,
                gender,
                address,
                city,
                postcode,
                country,
                role,
                avatar: "",
            },
            emailRedirectTo: "http://localhost:5173/new-password"
        }
    });
    if(error) {
        console.log(error);
        throw new Error(error.message);
    }

    return data;
}

/**
 * Function to log in with email and password.
 *
 * @param {Object} email - the email of the user
 * @param {Object} password - the password of the user
 * @return {Promise<Object>} the data object containing user information
 * @throws {Error} If the operation fails
 *
 * @author James M Kambanga
 * Date: April 10, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function login({email, password}) {

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if(error) throw new Error(error.message);

    return data;
}

/**
 * Retrieves the current user by fetching the session and user data from Supabase.
 *
 * @return {Object} The current user data if available, otherwise null.
 * @throws {Error} If the operation fails
 *
 * @author James M Kambanga
 * Date: April 10, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getCurrentUser() {

    const {data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const {data, error} = await supabase.auth.getUser();
    if (error) throw new Error(error.message);

    return data.user;
}

/**
 * Reset a user's password using the provided email address.
 *
 * @param {string} email - The email address of the user.
 * @return {Promise} The data of the password reset operation.
 * @throws {Error} If the operation fails
 *
 * @author James M Kambanga
 * Date: April 10, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function resetPassword({email}) {
    let { data, error } = await supabase.auth.resetPasswordForEmail(email,
        { redirectTo: "http://localhost:5173/new-password" }
    );
    if(error) throw new Error(error.message);
    return data;
}

/**
 * Retrieves all users from the 'profiles' table.
 *
 * @return {Array} An array of user profiles.
 * @throws {Error} If the operation fails
 *
 * @author James M Kambanga
 * Date: April 10, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function getAllUsers() {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('id', { ascending: false });
    if(error) throw new Error("Could not fetch users");
    return data;
}

/**
 * Update user information including password, first name, last name, phone number, date of birth,
 * gender, address, city, postcode, country, and avatar.
 *
 * @return {object} The updated user information.
 * @throws {Error} If the operation fails
 *
 * @author James M Kambanga
 * Date: April 10, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export async function updateUser({password,firstName, lastName, phoneNumber, dob, gender, address, city, postcode, country, avatar})
{
    // Update user
    let updateData;
    if (password) updateData = { password };
    else updateData = {
        data: {
            firstName,
            lastName,
            phoneNumber,
            dob,
            gender,
            address,
            city,
            postcode,
            country,
            avatar
        }
    }

    const { data, error } = await supabase.auth.updateUser(updateData);
    if(error) throw new Error(error.message)
    if (!avatar) return data;

    // upload avatar image
    const filename = `avatar-${data.user.id}-${Math.random()}`;
    const {error:storageError } = await supabase.storage
        .from("avatars")
        .upload(filename, avatar);

    if (storageError) throw new Error(storageError.message);
    // update user profile
    const { data: updateUser, error: updateError } = await supabase.auth
        .updateUser({
        data: {
            avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${filename}`
        }
    })

    if (updateError) throw new Error(updateError.message)

    return updateUser;
}

/**
 * Logs the user out by signing them out of the authentication system.
 *
 * @throws {Error} If the operation fails
 */
export async function logout() {
    const { error } = await supabase.auth.signOut();
    if(error) throw new Error(error.message);
}
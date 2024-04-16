import supabase, {supabaseUrl} from "./supabase.js";

export async function createUser({firstName, lastName, email, password, phoneNumber, dob, gender, address, city, postcode, country})
{

    const { data, error } = await supabase.auth.signUp({
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
                avatar: ""
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

export async function login({email, password}) {

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if(error) throw new Error(error.message);

    return data;
}

export async function getCurrentUser() {
    const {data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const {data, error} = await supabase.auth.getUser();

    if (error) throw new Error(error.message);
    return data?.user;
}

export async function resetPassword({email}) {
    let { data, error } = await supabase.auth.resetPasswordForEmail(email,
        { redirectTo: "http://localhost:5173/new-password" }
    );
    if(error) throw new Error(error.message);
    return data;
}

export async function getAllUsers() {

    const { data, error } = await supabase
        .from('auth.users')
        .select('*')
    if(error) throw new Error("Could not fetch users");
    console.log(data);
    return data;
}

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

export async function logout() {
    const { error } = await supabase.auth.signOut();
    if(error) throw new Error(error.message);
}
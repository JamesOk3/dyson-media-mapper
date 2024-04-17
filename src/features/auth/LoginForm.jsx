import Icons from "../../ui/Icons.jsx";
import {Link} from "react-router-dom";
import Logo from "../../images/logo/my-dyson-logo.png";
import {Button} from "../../ui/buttons/Button.jsx";
import GeneralContainer from "../../ui/containers/GeneralContainer.jsx";
import {useState} from "react";
import {useLogin} from "./hooks/useLogin.js";
import SpinnerMin from "../../ui/spinners/SpinnerMin.jsx";

/**
 * A component that renders the login form.
 *
 * @return {JSX.Element} The login form for users to enter their email and password.
 *
 * @author James M Kambanga
 * Date: April 1, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const {login, loggingIn} = useLogin();


    function handleSubmit(e) {
        e.preventDefault();
       if(!email || !password) return;
       login({email, password}, {
           onSettled: () => {
               setEmail('');
               setPassword('')
           }
       });
    }

    return (
        <GeneralContainer>
            <div className="w-full border-stroke dark:border-strokedark">
                <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                    <span className="mb-1.5 block font-medium">Welcome back!</span>

                    <div className="flex flex-col justify-center items-center">
                        <Link to="/" className="divide-y">
                            <img className="h-8" src={Logo} alt="Logo"/>
                        </Link>
                        <h2 className="mb-9 text-center text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                            Enter Your login credentials
                        </h2>
                    </div>


                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label id="email" className="mb-2.5 block font-medium text-black dark:text-white">
                                Email
                            </label>
                            <div className="relative">
                                <input className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                       type="email" id="email" autoComplete="username"
                                       placeholder="e.g., 9Gxj3@example.com" value={email}
                                       disabled={loggingIn}
                                       onChange={(e) => setEmail(e.target.value)}/>
                                <span className="absolute right-4 top-4">
                                    <Icons id="envelope" width="20" height="20" viewBox="0 0 20 20"/>
                                </span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label id="password" className="mb-2.5 block font-medium text-black dark:text-white">Password</label>
                            <div className="relative">
                                <input className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                       type="password" id="password" autoComplete="current-password"
                                       placeholder="**************" value={password} disabled={loggingIn}
                                       onChange={(e) => setPassword(e.target.value)}/>
                                <span className="absolute right-4 top-4">
                                    <Icons id="lock" width="22" height="22" viewBox="0 0 22 22"/>
                                </span>
                            </div>
                        </div>

                        <div className="mb-5 flex justify-between text-gray hover:bg-opacity-90">
                            <Link to="/" className="flex items-center gap-2">
                                <span className="flex items-center justify-center  w-8 h-8  rounded-full bg-primary text-white">
                                    <Icons id="left-arrow"/>
                                </span>
                                <span className="text-primary hover:underline">Homepage</span>
                            </Link>
                            <Button type="submit" variation="primary" size="small" disabled={loggingIn} >
                                {!loggingIn ? 'Sign In' : <SpinnerMin label="Loading.."/>}
                            </Button>

                        </div>

                        <div className="mt-6 text-center">
                            <p>
                                Forgot your password?{' '}
                                <Link to="/reset-password" className="text-primary hover:underline">
                                    Click here to reset
                                </Link>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </GeneralContainer>
    );
}

export default LoginForm;
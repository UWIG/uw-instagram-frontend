import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as ROUTES from  '../constants/routes';


export default function Login() {
    const navigate = useNavigate();
    // const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState(''); // an array with two values: the current state and a function to update the state
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();
        const obj = {username:emailAddress, password:password};
        try {
            const response = await axios.post('http://localhost:8080/login', obj);
            console.log(response);
            navigate(ROUTES.DASHBOARD);
        }
        catch {
            console.error(error);
            // Show a message indicating incorrect login credentials to the user
            setError('Incorrect login credentials. Please try again.');
        }
        
        // const auth = await axios.post('http://localhost:8080/login', obj)
        // .then((res) => {
        //     console.log(res);
        //   }).catch((err) => {
        //     console.error(err);
        //   });
        // console.log(auth);
        // if (usernameExists === "login successful556") {
        //     navigate(ROUTES.DASHBOARD);
        // }
        // else {

        // }
    };
      
    
    useEffect(() => {
        document.title = 'Login - Instagram';
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 
                border border-gray-primary mb-4 rounded">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/watig_logo.png" alt="UW_IG" className="mt-2 w-full mb-4"/>
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form method="POST">
                        <input
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email address"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border
                            border-gray-primary rounded mb-2"
                            onChange={({ target}) => setEmailAddress(target.value)}
                            value={emailAddress}
                        />
                        <input
                            aria-label="Enter your password"
                            type="password"
                            placeholder="Password"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border
                            border-gray-primary rounded mb-2"
                            onChange={({ target}) => setPassword(target.value)}
                            value={password}
                        />
                        <button onClick={handleLogin}
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-medium text-white w-full rounded h-8 font-bold
                        ${isInvalid && 'opacity-50'}`}
                        >
                            Login
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 
                rounded border border-gray-primary">
                    <p className="text-sm">
                        Don't have an account?{` `}
                        <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

// TODO: add to tailwind config
// bg-blue-medium -> hex values
// text-red-primary -> hex values
// text-blue-medium -> hex values
// text-gray-base -> hex values
// border-gray-primary -> hax values

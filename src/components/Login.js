import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';

import axios from '../api/axios';
const LOGIN_URL = '/igoeppauth/logincustomer';

const Login = () => {


    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [application, setApplication] = useState('');
    const [errMsg, setErrMsg] = useState();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password, application])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.postForm(LOGIN_URL, {
                username,
                password,
                application,
                headers: {
                  mode:'no-cors',
                  method: 'POST',
                  Accept: 'application/json',
                  'Content-Type': 'multipart/form-data',
                  'Access-Control-Allow-Origin': '*',
                  },
                withCredentials: true,

            }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            localStorage.setItem('token', response.data.access_token)
            const accessToken = response?.data?.access_token;
            const roles = response?.data?.loginsession;
            setAuth({ username, password, application, roles, accessToken });
            setUsername();
            setPassword();
            setApplication();
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />


                        <label htmlFor="application">Application:</label>
                        <input
                            type="text"
                            id="application"
                            onChange={(e) => setApplication(e.target.value)}
                            value={application}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/signup">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login

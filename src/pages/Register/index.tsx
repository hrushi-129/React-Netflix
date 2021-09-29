import React, { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleStart = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailRef.current) {
            setEmail(emailRef.current.value);
            // emailRef.current?.value = "";
        }
    };

    const handleFinish = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(emailRef.current?.value,passwordRef.current?.value);
        if (passwordRef.current?.value) setPassword(passwordRef.current.value);
        console.log(email, password);
    };

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="NetFlix Logo Working"
                        className="logo"
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </p>
                {!email ? (
                    <form className="input" onSubmit={handleStart}>
                        <input
                            type="email"
                            placeholder="email"
                            ref={emailRef}
                        />
                        <button type="submit" className="registerButton">
                            Get Started
                        </button>
                    </form>
                ) : (
                    <form className="input" onSubmit={handleFinish}>
                        <input
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                        />
                        <button type="submit" className="registerButton">
                            Start
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;

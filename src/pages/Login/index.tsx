import "./login.scss";
const Login = () => {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="NetFlix Logo Working"
                        className="logo"
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
                    <span>
                        New to Netflix ? <b>Sign up Now</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure
                        you'r not a bot
                        <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    );
};

export default Login;

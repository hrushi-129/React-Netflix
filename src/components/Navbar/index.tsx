import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";

import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="NetFlix Logo Working"
                    />
                    <span>Home</span>
                    <span>TV Shows</span>
                    <span>Movies</span>
                    <span>New & Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="svg-icon" />
                    <span>Kids</span>
                    <Notifications className="svg-icon" />
                    <img
                        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                        alt="NetFlix Profile"
                    />
                    <ArrowDropDown className="svg-icon" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

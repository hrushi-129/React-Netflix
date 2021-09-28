import "./home.scss";
import { Featured, Navbar, List } from "../components";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured />
            {[...new Array(10)].map((item, idx) => (
                <List key={idx} />
            ))}
        </div>
    );
};

export default Home;

import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hey!!</p>
                    <p>I am Sunidhi </p>
                    <p>Software Engineering Student</p>
                </h1>
                <Link to="about">
                    <button>Know me more</button>
                </Link>
            </div>
            <div className="me">
                <img src={"/images/Sunidhi_formal.jpeg"} alt="me"></img>
            </div>
        </div>
    );
};

export default Home;

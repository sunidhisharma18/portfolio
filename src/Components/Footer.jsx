import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./style.css";

const Footer = () => {
    return (
        <footer>
        <div className="container">
           <a href="https://www.linkedin.com/in/sunidhi-sharma-a588051b0/">
              <LinkedInIcon style={{ color: "#0077B5" }} fontSize="large" className="icon"/>  
           </a>
           <a href="https://github.com/sunidhisharma18">
              <GitHubIcon style={{ color: " #6e5494" }} fontSize="large" className="icon"/> 
           </a>
           <a href="https://www.facebook.com/sunidhi.sharma.182/">
              <FacebookIcon style={{ color: "3b5999" }} fontSize="large" className="icon"/> 
           </a>
           <a href="https://www.instagram.com/sunidhisharma18/">
              <InstagramIcon style={{ color: "e4405f" }} fontSize="large" className="icon"/> 
           </a>
           </div>
        </footer>
    );
};

export default Footer;

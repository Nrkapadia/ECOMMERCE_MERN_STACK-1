import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FbIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram";
import YtIcon from "@material-ui/icons/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
     

     
      <div className="midFooter">
        <div >

            <a href="https://www.linkedin.com/in/nisarg-kapadia-967a191b5" target="blank">
              <LinkedInIcon />
            </a> 
            <a href="http://instagram.com/nisarg_kapadia1422" target="blank">
              <InstagramIcon  />
            </a> 
            <a href="https://www.facebook.com/profile.php?id=100009194617166" target="blank">
              <FbIcon  />
            </a>  
            <a href="https://www.youtube.com" target="blank"> 
              <YtIcon />  
            </a>
   
        </div>
        <div className="copyRight">
        <p>Copyrights&copy; 2022 Ecommerce.All rights resereved.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

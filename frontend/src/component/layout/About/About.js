import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FbIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "http://instagram.com/nisarg_kapadia1422";
  };
  return (
    <div className="aboutSection">
      <div></div>
      {/* <div className="aboutSectionGradient"></div> */}
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dj5detcoa/image/upload/v1657631962/avatars/j1bus5ia1tdqnevxasf9.jpg"
              alt="Founder"
            />
            <Typography>Mr Kapadia</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              Created by Nisarg kapadia
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Contact Me</Typography>
           

            <a href="https://www.linkedin.com/in/nisarg-kapadia-967a191b5" target="blank">
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>
            <a href="http://instagram.com/nisarg_kapadia1422" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009194617166" target="blank">
              <FbIcon className="fbSvgIcon" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

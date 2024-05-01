import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar2.jpg";
import {Facebook, Instagram, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developers</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Team No.- 3091</h3>
                        <p>Full Stack Developer Team</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Science and Engineering Student at Koneru Lakshmiah Educational Foundation, Vijayawada.</p>
                    <p>Graduating in 2026</p>
                    <p>We have done this project for our MSWD course</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/profile.php?id=100028553633649"} title={"Pranav"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/Zio_Crazy"}  title={"Vamsi"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/sai_manohar_0/"}  title={"Manohar"}>
                            <Instagram/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Developer;
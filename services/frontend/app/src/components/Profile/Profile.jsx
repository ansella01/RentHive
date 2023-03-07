import { Link, useNavigate } from "react-router-dom";
import React from "react";
import './Profile.css';
import wave from "../../img/wave.jpg";
import profilePic from "../../img/JessicaProfilePic.png";
import { FiBookmark } from "react-icons/fi";
import {BiSend} from "react-icons/bi";
import {MdOutlineMoreVert} from "react-icons/md";
export default function Profile() {
    return (
        <div className="grey-background">
            <div className="white-background">
                <div className="banner-container">
                    <img src={wave}>
                    </img>
                </div>
                <div className="profile-header-wrapper">
                    <div className="profile-picture-container">
                        <img src={profilePic}></img>
                    </div>

                    <div className="name-age-gender-buttons-wrapper">
                        
                        <div className="name-age-gender-wrapper">
                            <text className="title-text" style={{lineHeight:"28px"}}>Jessica Jameson</text>
                            <text className="grey-subtitle-text" style={{lineHeight:"28px"}}>24 years • Female</text>
                        </div>

                        <div className="profile-buttons-wrapper">
                            <button className="yellow-profile-button-container" >
                                <FiBookmark/>
                                <text className="black-subtitle-text">
                                    Save User
                                </text>
                            </button>

                            <button className="yellow-profile-button-container" >
                                <BiSend/>
                                <text className="black-subtitle-text">
                                    Send Invite
                                </text>
                            </button>
                            <button className="transparent-profile-button-container">
                                <MdOutlineMoreVert/>
                            </button>
                        </div>

                    </div>

                </div>


            </div>
        </div>
      );
}
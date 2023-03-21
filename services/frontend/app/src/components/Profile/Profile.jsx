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

                <div className="profile-header">

                    <div className="banner-container">
                        <img src={wave}>
                        </img>
                    </div>

                    <div className="profile-header-main-info-and-buttons">
                        <div className="profile-header-top-row">
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

                        <div className="profile-header-contact-details">
                            <div className="social-media-detail">
                                <i class="fa-brands fa-telegram" />
                                <text className="grey-subtitle-text">
                                    @JessyJ
                                </text>
                            </div>
                            <div className="social-media-detail">
                                <i class="fa-brands fa-instagram" />
                                <text className="grey-subtitle-text">
                                    @JessyJami
                                </text>
                            </div>
                            <div className="social-media-detail">
                                <i class="fa-brands fa-facebook" />
                                <text className="grey-subtitle-text">
                                    facebook.com/doublej
                                </text> 
                            </div>
                        </div>

                        <div className="profile-header-description">
                            <text className="black-subtitle-text">
                                What’s up! I am an international student from America looking for someone to split rental costs with! 
                                I am an avid vegan. 
                                I am hoping to help local animal welfare groups by fostering cats when I move in :) 
                            </text>
                        </div>

                        <div className="profile-header-mutuals-section">
                            <text className="grey-body-text">
                                You both follow
                            </text>
                            <div className="mutual-container">
                                <i class="fa-brands fa-facebook"/>
                                <text className="grey-body-text">
                                    Felice Nevihat
                                </text>
                            </div>
                            <text className="grey-body-text"> 
                                ,
                            </text>
                            <div className="mutual-container">
                                <i class="fa-brands fa-instagram"/>
                                <text className="grey-body-text">
                                    Mark Imar
                                </text>
                            </div>
                            <div className="mutual-container">
                                <text className="grey-body-text">
                                    + 3 others.
                                </text>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      );
}
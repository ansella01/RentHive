import { Link, useNavigate } from "react-router-dom";
import React from "react";
import NetworkMap from "../NetworkMap"
import MatchedSection from "../MatchedSection"

export default function Home() {
    return (
        <div style={{
          background: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height:"100vh"
          }}>
          <div 
          style={{
            background:"#fef9ec",
            paddingLeft: "32px",
            paddingBottom:"32px",
            borderRadius:"16px",
            width:"1480px",
            height: "147px",
            marginTop:"40px",
            marginBottom: "42px",
            boxShadow: "0px 4px 4px #c0c0c0"
          }}> <h1>Hello, Angela!</h1>
          <span style={{color:"#818181", fontWeight:"600", marginTop:"28px"}}>You currently have no notifications. Go out there and explore the world!</span>
          </div>
          <div style={{
            background:"#ffffff",
            paddingTop: "40px",
            paddingLeft: "40px",
            paddingBottom: "40px",
            borderRadius:"16px",
            width:"1480px",
            height: "723px",
            marginBottom:"42px"
          }}><NetworkMap/></div>
          <div style={{
            background:"#ffffff",
            paddingLeft: "40px",
            paddingBottom: "40px",
            borderRadius:"16px",
            width:"1480px",
            height: "187px"
            }}> 
            <h1>Matched Roommates</h1>
            <span style={{color:"#818181", fontWeight:"600"}}>
              <p>You have no matched roommates yet.
                <br></br>
                Click on the search bar to start matching now!
              </p>
              <p></p></span>
            </div>
          
          </div>
      );
}
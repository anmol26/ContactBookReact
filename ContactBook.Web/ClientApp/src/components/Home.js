import React, { Component } from 'react';
import  './main.css';

import Contact from './Contact';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <div class="headingBar">
                <div class="headingText">
                    <span>Address Book</span>
                </div>
            </div>
            <div class="navigationBar">
                <div class="navigations">
                    <li><a href="#">HOME</a></li>
                    <li onclick="showForm()" style={{cursor: "pointer"}}><a>+ADD</a></li>
                </div>
                <img src="../Images/blog-icon.png" alt="Img" />
            </div>
            <div class="middle" style={{display: "flex", flexFlow: "row wrap"} }>
                <div style={{display: "inline-block"}} class="middleLeft">
                    <p style={{margin: "30px 0 20px 20px", fontSize: "18px", fontWeight: "bold"}}>
                            CONTACTS
                        </p>
                        <div class="box" id="contactList">
                        </div>
                    </div>
                <div
                    id="viewBox"
                    class="middleRight"
                    style={{marginLeft: "150px", marginTop: "60px", display: "inlineBlock"}}>
                    <Contact contact={
                        {
                            id: 1,
                            name: "Chandermani Arora",
                            email: "chandermani@technovert.com",
                            mobile: "904 543 6009",
                            landline: "786 21 3612456",
                            website: "gooogle.com",
                            address: "52 A/2 Mathura"
                        }} />
                </div>
                </div>
            
      </div>
    );
  }
}

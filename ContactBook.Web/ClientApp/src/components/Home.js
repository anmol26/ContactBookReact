import React, { Component } from 'react';
import  './main.css';
//import './main.jsx';
import blog from '../Images/blog-icon.png';
import Contact from './Contact';

export class Home extends Component {
    static displayName = Home.name;

    showForm() {
        document.getElementById('viewBox').innerHTML =
        `<div style="box-shadow: 0 0 10px 10px grey;">
        <form onsubmit="addNewContact()" style="padding:30px">
    <label for="name">Name</label><br />
    <input type="text" id="name" name="name" value="" style="height:30px; width:100%"/><br /><br>
    <label for="email">Email</label><br />
    <input type="text" id="email" name="email" value="" style="height:30px; width:100%"/><br /><br>
    <label for="mobile">Mobile</label></br>
    <input type="text" id="mobile" name="mobile" value="" style="height:30px; width:100% display:inline-block"/>
    <label for="landline">Landline</label>
    <input type="text" id="landline" name="landline" value="" style="height:30px; width:50% display:inline-block"/><br /><br>
    <label for="website">Website</label><br />
    <input type="text" id="website" name="website" value="" style="height:30px; width:100%"/><br /><br>
    <label for="address">Address</label><br />
    <input type="text" id="address" name="address" value="" style="height:80px; width:100%"/><br /><br>
    <input style="margin-left:500px; background:#468c00; padding:10px 25px 10px 25px; border:none; color:white"type="submit"  value="Add" />
        </form>
        </div>
    `
        ;

    }

    
    contacts = [
    {
        id: 1,
        name: "Chandermani Arora",
        email: "chandermani@technovert.com",
        mobile: "904 543 6009",
        landline: "786 21 3612456",
        website: "gooogle.com",
        address: "52 A/2 Mathura"
    },
    {
        id: 2,
        name: "Vaibhav Taunk",
        email: "vaibhav.T@technovert.com",
        mobile: "904 587 6765",
        landline: "876 34 8364298",
        website: "yahoo.com",
        address: "123 Hyderawad"
    },
    {
        id: 3,
        name: "Bhagavan",
        email: "Bhagawan.T@technovert.com",
        mobile: "876 543 6009",
        landline: "879 63 2785437",
        website: "microsoft.com",
        address: "876 Mathura "
    },
    {
        id: 4,
        name: "Pujitha",
        email: "pujitha.k@technovert.com",
        mobile: "835 443 6009",
        landline: "323 42 7354238",
        website: "technovert.com",
        address: "345 Mathura"
    }
    ]

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
                    <li><a href="">HOME</a></li>
                    <li onClick={this.showForm} style={{cursor: "pointer"}}><a>+ADD</a></li>
                </div>
                <img src={blog} alt="blog-img" />
            </div>
            <div class="middle" style={{display: "flex", flexFlow: "row wrap"}}>
                <div style={{display: "inline-Block"}} class="middleLeft">
                    <p style={{margin: "30px 0 20px 20px", fontSize: "18px", fontWeight: "bold"}}>
                            CONTACTS
                        </p>
                        <div class="box" id="contactList">
                        </div>
                    </div>
                <div
                    id="viewBox"
                    class="middleRight"
                    style={{marginLeft: "150px", marginTop: "60px", display: "inline-Block"}}>
                    <Contact contact={
                        {
                            id: 1,
                            name: "Chandermani Arora",
                            email: "chandermani@technovert.com",
                            mobile: "904 543 6009",
                            landline: "786 21 3612456",
                            website: "gooogle.com",
                            address: "52 A/2 Mathura"
                        },
                        {
                            id: 2,
                            name: "Vaibhav Taunk",
                            email: "vaibhav.T@technovert.com",
                            mobile: "904 587 6765",
                            landline: "876 34 8364298",
                            website: "yahoo.com",
                            address: "123 Hyderawad"
                        },
                        {
                            id: 3,
                            name: "Bhagavan",
                            email: "Bhagawan.T@technovert.com",
                            mobile: "876 543 6009",
                            landline: "879 63 2785437",
                            website: "microsoft.com",
                            address: "876 Mathura "
                        },
                        {
                            id: 4,
                            name: "Pujitha",
                            email: "pujitha.k@technovert.com",
                            mobile: "835 443 6009",
                            landline: "323 42 7354238",
                            website: "technovert.com",
                            address: "345 Mathura"
                        }
} />
                </div>
                </div>
            
      </div>
    );
  }
}

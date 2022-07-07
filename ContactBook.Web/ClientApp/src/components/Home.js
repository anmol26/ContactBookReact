import React, { Component } from 'react';
import  './main.css';
//import './main.jsx';
import blog from './Images/blog-icon.png';
import Contact from './Contact';
import ContactList from './ContactList';
import ShowForm from './ShowForm';

export class Home extends Component {
    static displayName = Home.name;


    constructor() {
        super();
        this.state = {

            isForm: false,

            contacts: [
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
            ],

            currContact: null
        }

        this.setCurrContact = this.setCurrContact.bind(this);
        this.setShowForm = this.setShowForm.bind(this);
    }

    componentDidMount() {
        this.setState({ currContact: this.state.contacts[0] });
    }

    setCurrContact(id) {
        this.setState({ currContact: this.state.contacts.find(c => c.id === id) });
    }
    setShowForm(isFormShow) {
        this.setState({ isForm: isFormShow });
    }
    
    // renderContacts() {
    //let htmlString;
    //let contactList = document.querySelector("#contactList");
    //     {
    //         contacts.forEach(contact => {
    //         htmlString += `<div class="boxes" id="box1" onclick="showContactInfo(${contact.id})">
    //    <p style="padding-bottom: 5px; font-size:28px;">${contact.name}</p>
    //    <p style="margin-left:5px">${contact.email}</p>
    //    <p style="padding-bottom: 5px; margin-left:5px">+91 ${contact.mobile}</p>
    //  </div>`;
    //         })
    //     };
    //contactList.innerHTML = htmlString;
    //}


  render () {
    return (
      <div>
            <div className="headingBar">
                <div className="headingText">
                    <span>Address Book</span>
                </div>
            </div>
            <div className="navigationBar">
                <div className="navigations">
                    <li><a href="">HOME</a></li>
                    <li onClick={() => this.setShowForm(true)} style={{cursor: "pointer"}}><a>+ADD</a></li>
                </div>
                <img src={blog} alt="blog-img" />
            </div>
            <div className="middle" style={{display: "flex", flexFlow: "row wrap"}}>
                <div style={{display: "inline-Block"}} className="middleLeft">
                    <p style={{margin: "30px 0 20px 20px", fontSize: "18px", fontWeight: "bold"}}>
                            CONTACTS
                        </p>
                    <div className="box" id="contactList" >
                        <ContactList contacts={this.state.contacts} onContactSelected={this.setCurrContact} />
                        </div>
                    </div>
                <div
                    id="viewBox"
                    className="middleRight"
                    style={{ marginLeft: "150px", marginTop: "60px", display: "inline-Block" }}>
                    {(this.state.isForm ? <ShowForm /> : (this.state.currContact ? <Contact contact={this.state.currContact} /> : null))}
                  
                </div>
                </div>
            
      </div>
    );
  }
}

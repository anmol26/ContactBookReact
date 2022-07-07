import React, { Component } from 'react';
import  './main.css';
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
        this.addNewEmployee = this.addNewEmployee.bind(this);
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

    addNewEmployee=(event)=> {
        event.preventDefault()
        this.setState({
            contacts: this.state.contacts.concat({
                id: 5,
                name: event.target[0].value,
                email: event.target[1].value,
                mobile: event.target[2].value,
                landline: event.target[3].value,
                website: event.target[4].value,
                address: event.target[5].value
            })
        });
    }

    deleteEmployee() {
        console.log("hi, i am delete ")
    }
    editEmployee() {
        console.log("hi, i am edit")
    }
    
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
                    style={{ marginLeft: "150px", marginTop: "60px", display: "flex", flexFlow: "row wrap" }}>
                    {(this.state.isForm ? <ShowForm onClick={this.addNewEmployee} /> : (this.state.currContact ? <Contact onDelete={this.deleteEmployee} onEdit={this.editEmployee} contact={this.state.currContact} /> : null))}
                  
                </div>
                </div>
            
      </div>
    );
  }
}

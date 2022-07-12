import React, { Component } from 'react';
import  './main.css';
import blog from './Images/blog-icon.png';
import Contact from './Contact';
import ContactList from './ContactList';
import ShowForm from './ShowForm';
import UpdateForm from './UpdateForm';
import axios from 'axios'; 

export class Home extends Component {
    static displayName = Home.name;


    constructor() {
        super();
        this.state = {

            isEditForm: false,
            isAddForm: false,

            contacts:[],

            currContact: null
        }

        this.setCurrContact = this.setCurrContact.bind(this);
        this.setShowForm = this.setShowForm.bind(this);
        this.addNewEmployee = this.addNewEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    componentDidMount() {
        this.setState({ currContact: this.state.contacts[0] });
        axios.get("https://localhost:44356/api/contact/Get") 
            .then(response => {
                this.setState({contacts: response.data})
            })
            .catch(error => {
                console.log(error)
            })

    };

    setCurrContact(id) {
        this.setState({ currContact: this.state.contacts.find(c => c.id === id) });

    }
    setShowForm(isEdit, isFormShow)
    {
        if (isEdit)
        {
            this.setState({ isAddForm: false });   
            this.setState({ isEditForm: isFormShow });
        }
        else
            this.setState({ isAddForm: isFormShow });
    }

    addNewEmployee(event) {
        //event.preventDefault()
        let person = {
            name: event.target[0].value,
            email: event.target[1].value,
            mobile: event.target[2].value,
            landline: event.target[3].value,
            website: event.target[4].value,
            address: event.target[5].value
}
        axios.post("https://localhost:44356/api/contact/Create", person )
            .then(function (response)
            {
                console.log(response.data);
            })
            .catch(function (error) 
            {
                console.log(error);
            });
        this.setState({
            contacts: this.state.contacts.concat({
                name: event.target[0].value,
                email: event.target[1].value,
                mobile: event.target[2].value,
                landline: event.target[3].value,
                website: event.target[4].value,
                address: event.target[5].value
            })
        });
    }

    deleteEmployee(id) {
        const deleteId = id
        console.log(id);
        let contacts = [...this.state.contacts];
        contacts.splice(contacts.findIndex(c => c.id === id), 1);
        this.setState({ contacts: contacts });
        this.setState({currContact:null});
        axios.delete('https://localhost:44356/api/contact/Delete?contactId='+deleteId) 
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })

    }
    editEmployee() {
        this.setShowForm(true, true);
    }
    UpdateEmployee(event) {
        console.log("HIIIIIIIIIIIIIIIIIIIII", event.target[0].value)
        console.log("homeeeeeee", event.target[1].value)
        let person = {
            id: event.target[0].value,
            name: event.target[1].value,
            email: event.target[2].value,
            mobile: event.target[3].value,
            landline: event.target[4].value,
            website: event.target[5].value,
            address: event.target[6].value
        }
        //console.log("homeeeeeee", this.state.currContact.id, person);
        //event.preventDefault()
        axios.patch('https://localhost:44356/api/contact/Update', person)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
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
                    <li><a href="#">HOME</a></li>
                    <li onClick={() => this.setShowForm(false, true)} style={{cursor: "pointer"}}><a>+ADD</a></li>
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
                    {(this.state.isAddForm ? <ShowForm onClick={this.addNewEmployee} /> : null)}
                    {(this.state.isEditForm ? <UpdateForm onClick={this.UpdateEmployee } formData={this.state.currContact} isEdit={true } /> : null)}
                    {(this.state.currContact ? <Contact onDelete={this.deleteEmployee} onEdit={this.editEmployee} contact={this.state.currContact} /> : null)}
                  
                </div>
                </div>
            
      </div>
    );
  }
}

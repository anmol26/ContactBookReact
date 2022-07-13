import React, { Component } from 'react';
import './main.css';
import blog from '../Images/blog-icon.png';
import Contact from './Contact';
import ContactList from './ContactList';
import Form from './Form';
import { post, del, update, get } from '../Services/ContactService'

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
        get().then(data => {
            this.setState({ contacts: data.data })
        });
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
        let person = {
            name: event.target[0].value,
            email: event.target[1].value,
            mobile: event.target[2].value,
            landline: event.target[3].value,
            website: event.target[4].value,
            address: event.target[5].value
}
        post(person);
        this.setState({
            contacts: this.state.contacts.concat(person)
        });
    }

    deleteEmployee(id) {
        const deleteId = id
        console.log(id);
        let contacts = [...this.state.contacts];
        contacts.splice(contacts.findIndex(c => c.id === id), 1);
        this.setState({ contacts: contacts });
        this.setState({currContact:null});
        del(deleteId)

    }

    editEmployee() {
        this.setShowForm(true, true);
    }

    UpdateEmployee(event) {
        console.log("id",event.target[0].value,
            "name", event.target[1].value)
        let person = {
            id: event.target[0].value,
            name: event.target[1].value,
            email: event.target[2].value,
            mobile: event.target[3].value,
            landline: event.target[4].value,
            website: event.target[5].value,
            address: event.target[6].value
        }
        update(person);
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
                    <li onClick={() => this.setShowForm(false, true)}><a>+ADD</a></li>
                </div>
                <img src={blog} alt="blog-img" />
            </div>
            <div className="middle">
                <div className="middleLeft">
                    <p>CONTACTS</p>
                    <div className="box" id="contactList" >
                        <ContactList contacts={this.state.contacts} onContactSelected={this.setCurrContact} />
                    </div>
                </div>
                <div
                    id="viewBox"
                    className="middleRight"
                    >
                    {(this.state.isAddForm ? <Form onClick={this.addNewEmployee} formData={this.state.currContact} isEdit={false} /> : null)}
                    {(this.state.isEditForm ? <Form onClick={this.UpdateEmployee } formData={this.state.currContact} isEdit={true } /> : null)}
                    {(this.state.currContact ? <Contact onDelete={this.deleteEmployee} onEdit={this.editEmployee} contact={this.state.currContact} /> : null)}  
                </div>
            </div>
            
      </div>
    );
  }
}

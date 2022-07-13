import React from 'react';
import './main.css';

class ContactList extends React.Component {

    render() {
        return(
        <>
                {
                    this.props.contacts.map((contact) => (
                    <div className="boxes" id="box1" key={contact.id} onClick={() => this.props.onContactSelected(contact.id) }>
                        <p id="bname">{contact.name}</p>
                        <p id="bemail">{contact.email}</p>
                        <p id="bmobile">+91 {contact.mobile}</p>
                    </div>
                ))
            }
        </>
        )
    }
}

export default ContactList;
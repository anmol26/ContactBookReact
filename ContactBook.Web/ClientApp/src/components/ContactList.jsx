import React from 'react';


class ContactList extends React.Component {

    render() {
        return(
        <>
                {
                    this.props.contacts.map((contact) => (
                        <div className="boxes" id="box1" key={contact.id} onClick={() => this.props.onContactSelected(contact.id) }>
                        <p style={{ paddingBottom: "5px", fontSize: "28px" }}>{contact.name}</p>
                        <p style={{ marginLeft: "5px" }}>{contact.email}</p>
                        <p style={{ paddingBottom: "5px", marginLeft: "5px" }} >+91 {contact.mobile}</p>
                    </div>
                ))
            }
        </>
        )
    }
}

export default ContactList;
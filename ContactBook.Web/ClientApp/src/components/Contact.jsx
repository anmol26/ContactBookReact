import React from 'react';
import delete1 from './Images/delete1.png';
import edit from './Images/edit1.jpg';


class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <p style={{ fontSize: "30px", fontWeight: "bold", color: "#333333" }} >{this.props.contact.name}
                    <a><img src={ edit} alt='edit' />Edit</a>
                    <a><img src={delete1 } alt='delete'/>Delete</a>
                </p><br />
                <p>Email: {this.props.contact.email}</p><br />
                <p>Mobile: +91 {this.props.contact.mobile}</p>
                <p>Landline: {this.props.contact.landline}</p><br />
                <p>Website: https://{this.props.contact.website}</p><br />
                <p>Address: {this.props.contact.address}</p><br />
            </div>
       );
    }
}

export default Contact;
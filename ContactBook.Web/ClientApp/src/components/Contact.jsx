import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <p style={{ fontSize: "30px", fontWeight: "bold", color: "#333333" }} >{this.props.contact.name}
                    <a><img src="../Images/edit1.jpg" />Edit</a>
                    <a><img src="../Images/delete1.png" />Delete</a>
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
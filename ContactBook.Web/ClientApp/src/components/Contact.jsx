import React from 'react';
import delete1 from './Images/delete1.png';
import edit from './Images/edit1.jpg';


class Contact extends React.Component {
    render() {
        return (
            <div className="contact" style={{marginTop:"20px"}}>
                <p style={{ fontSize: "30px", fontWeight: "bold", color: "#333333" }} >{this.props.contact.name}
                    <span style={{ fontSize: "15px" }}>
                        <img src={edit} alt='edit' onClick={()=>this.props.onEdit(this.props.contact.id)} style={{ marginLeft: "35px", height: "15px", width: "15px" }} />
                        Edit
                    </span>
                    <span style={{ fontSize: "15px" }}>
                        <img src={delete1} onClick={()=>this.props.onDelete(this.props.contact.id)} alt='delete' style={{ marginLeft: "20px", height: "15px", width: "15px" }} />
                        Delete
                    </span>
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
import React from 'react';
import delete1 from './Images/delete1.png';
import edit from './Images/edit1.jpg';


class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <p className="contactName">{this.props.contact.name}
                    <span>
                        <img className="contactEditIcon" src={edit} alt='edit' onClick={()=>this.props.onEdit(this.props.contact.id)} />
                        Edit
                    </span>
                    <span>
                        <img className="contactDeleteIcon" src={delete1} onClick={()=>this.props.onDelete(this.props.contact.id)} alt='delete'/>
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
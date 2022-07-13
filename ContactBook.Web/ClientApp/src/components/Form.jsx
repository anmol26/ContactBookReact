import React from 'react';
import './form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData
        }
    }
    render() {
        return (

            <div className="form">
                <form onSubmit={this.props.onClick} style={{ padding: "30px" }} >
                    {this.props.isEdit && (<>ID: <input type="button" id="EId" name="Eid" value={this.state.formData.id}/><br /><br /></>)}
                    <label for="name">Name</label><br />
                    <input type="text" id="name" name="name" value={this.props.isEdit ? this.state.formData.name : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, name: e.target.value } })} /><br /><br />
                    <label for="email">Email</label><br />
                    <input type="text" id="email" name="email" value={this.props.isEdit ? this.state.formData.email : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, email: e.target.value } })} /><br /><br />
                    <label for="mobile">Mobile</label><br />
                    <input type="number" id="mobile" name="mobile" value={this.props.isEdit ? this.state.formData.mobile : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, mobile: e.target.value } })} /><br />
                    <label for="landline">Landline</label><br />
                    <input type="number" id="landline" name="landline" value={this.props.isEdit ? this.state.formData.landline : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, landline: e.target.value } })} /><br /><br />
                    <label for="website">Website</label><br />
                    <input type="text" id="website" name="website"  value={this.props.isEdit ? this.state.formData.website : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, website: e.target.value } })} /><br /><br />
                    <label for="address">Address</label><br />
                    <textarea id="address" name="address" value={this.props.isEdit ? this.state.formData.address : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, address: e.target.value } })} /><br /><br />
                    <input id="submit" type="submit" value={this.props.isEdit ? "Update" : "Add"} />
                </form>
            </div>

        );
    }
}

export default Form;



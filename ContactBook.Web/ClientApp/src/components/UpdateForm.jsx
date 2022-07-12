import React from 'react';
import axios from 'axios';

class UpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData
        }
    }
    render() {
        return (

            <div style={{ width: "100%", boxShadow: "0 0 10px 10px grey", display: "flex", flexFlow: "row wrap" }}>
                <form onSubmit={this.props.onClick} style={{ padding: "30px" }} >
                    <input type="text" id="EId" name="Eid" style={{ height: "30px", width: "100%" }} value={this.state.formData.id} /><br /><br />
                    <label for="name">Name</label><br />
                    <input type="text" id="name" name="name" style={{ height: "30px", width: "100%" }} value={this.props.isEdit ? this.state.formData.name : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, name: e.target.value } })} /><br /><br />
                    <label for="email">Email</label><br />
                    <input type="text" id="email" name="email" style={{ height: "30px", width: "100%" }} value={this.props.isEdit ? this.state.formData.email : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, email: e.target.value } })} /><br /><br />
                    <label for="mobile">Mobile</label><br />
                    <input type="number" id="mobile" name="mobile" style={{ height: "30px", width: "50%", display: "inline-block" }} value={this.props.isEdit ? this.state.formData.mobile : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, mobile: e.target.value } })} /><br />
                    <label for="landline">Landline</label><br />
                    <input type="number" id="landline" name="landline" style={{ height: "30px", width: "50%", display: "inline-block" }} value={this.props.isEdit ? this.state.formData.landline : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, landline: e.target.value } })} /><br /><br />
                    <label for="website">Website</label><br />
                    <input type="text" id="website" name="website" style={{ height: "30px", width: "100%" }} value={this.props.isEdit ? this.state.formData.website : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, website: e.target.value } })} /><br /><br />
                    <label for="address">Address</label><br />
                    <input type="text" id="address" name="address" style={{ height: "80px", width: "100%" }} value={this.props.isEdit ? this.state.formData.address : null} onChange={(e) => this.setState({ formData: { ...this.state.formData, address: e.target.value } })} /><br /><br />
                    <input type="submit" style={{ marginLeft: "300px", background: "#468c00", padding: "10px 25px 10px 25px", border: "none", color: "white" }} value={this.props.isEdit ? "Update" : "Add"} />
                </form>
            </div>

        );
    }
}

export default UpdateForm;



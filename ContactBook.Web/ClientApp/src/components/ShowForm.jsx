import React from 'react';

class ShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: this.props.formData
        }
    }

    setFormData(data) {
        this.setState({ formData: data });
        //console.log(this.state.formData);
    }
    render() {
        return (
       
            <div style={{ width:"100%", boxShadow: "0 0 10px 10px grey", display: "flex", flexFlow: "row wrap"}}>
                    <form onSubmit={this.props.onClick} style={{ padding: "30px"}} >
                    <label for="name">Name</label><br />
                    <input type="text" id="name" name="name" style={{ height: "30px", width: "100%" }} value={this.props.isEdit ? this.state.formData.name : ""} onChange={(e) => this.setFormData({...this.state.formDate, name:e.target.value})} /><br /><br />
                        <label for="email">Email</label><br />
                    <input type="text" id="email" name="email" style={{ height: "30px", width: "100%" }} value={this.props.isEdit ? this.state.formData.email : ""} onChange={(e) => this.setFormData({ ...this.state.formDate, email: e.target.value })} /><br /><br/>
                        <label for="mobile">Mobile</label><br/>
                    <input type="text" id="mobile" name="mobile" style={{ height: "30px", width: "50%", display: "inline-block" }} value={this.props.isEdit ? this.state.formData.mobile : ""} onChange={(e) => this.setFormData({ ...this.state.formDate, mobile: e.target.value })} /><br/>
                        <label for="landline">Landline</label><br/>
                    <input type="text" id="landline" name="landline" style={{ height: "30px", width: "50%", display: "inline-block" }} value={this.props.isEdit ? this.state.formData.landline : ""} onChange={(e) => this.setFormData({ ...this.state.formDate, landline: e.target.value })} /><br /><br/>
                        <label for="website">Website</label><br />
                    <input type="text" id="website" name="website" style={{ height: "30px", width: "100%" }} value={this.props.isEdit ? this.state.formData.website : ""} onChange={(e) => this.setFormData({ ...this.state.formDate, website: e.target.value })} /><br /><br/>
                        <label for="address">Address</label><br />
                    <input type="text" id="address" name="address" style={{ height: "80px", width: "100%" }} value={this.props.isEdit ? this.state.formData.address : ""} onChange={(e) => this.setFormData({ ...this.state.formDate, address: e.target.value })} /><br /><br/>
                        <input type="submit" style={{ marginLeft: "300px", background: "#468c00", padding: "10px 25px 10px 25px", border: "none", color: "white" }}  value={this.props.isEdit ?"Update" : "Add"} />
                    </form>
                </div>
            
        );
    }
}

export default ShowForm;



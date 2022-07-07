import React from 'react';

class ShowForm extends React.Component {
    render() {
        return (
       
            <div style={{ width:"100%", boxShadow: "0 0 10px 10px grey", display: "flex", flexFlow: "row wrap"}}>
                    <form onSubmit={this.props.onClick} style={{ padding: "30px"}} >
                        <label for="name">Name</label><br />
                        <input type="text" id="name" name="name" style={{ height:"30px", width:"100%"}} /><br /><br/>
                        <label for="email">Email</label><br />
                        <input type="text" id="email" name="email"  style={{ height: "30px", width: "100%" }} /><br /><br/>
                        <label for="mobile">Mobile</label><br/>
                        <input type="text" id="mobile" name="mobile"  style={{ height: "30px", width: "50%", display: "inline-block" }} /><br/>
                        <label for="landline">Landline</label><br/>
                        <input type="text" id="landline" name="landline"  style={{ height: "30px", width: "50%", display: "inline-block" }} /><br /><br/>
                        <label for="website">Website</label><br />
                        <input type="text" id="website" name="website"  style={{ height: "30px", width: "100%" }} /><br /><br/>
                        <label for="address">Address</label><br />
                        <input type="text" id="address" name="address" style={{ height: "80px", width: "100%" }} /><br /><br/>
                        <input type="submit" style={{ marginLeft: "300px", background: "#468c00", padding: "10px 25px 10px 25px", border: "none", color: "white" }}  value="Add" />
                    </form>
                </div>
            
        );
    }
}

export default ShowForm;



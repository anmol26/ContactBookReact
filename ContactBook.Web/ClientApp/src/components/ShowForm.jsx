import React from 'react';

class ShowForm extends React.Component {
    render() {
        return (
            <div className="">
                <div style={{boxShadow: "0 0 10px 10px grey"}}>
                    <form onSubmit="addNewContact()" style={{ padding: "30px" }} >
                        <label for="name">Name</label><br />
                        <input type="text" id="name" name="name" value="" style={{ height:"30px", width:"100%"}} /><br /><br/>
                        <label for="email">Email</label><br />
                        <input type="text" id="email" name="email" value="" style={{ height: "30px", width: "100%" }} /><br /><br/>
                        <label for="mobile">Mobile</label><br/>
                        <input type="text" id="mobile" name="mobile" value="" style={{ height: "30px", width: "100%", display: "inline-block" }} />
                        <label for="landline">Landline</label>
                        <input type="text" id="landline" name="landline" value="" style={{ height: "30px", width: "50%", display: "inline-block" }} /><br /><br/>
                        <label for="website">Website</label><br />
                        <input type="text" id="website" name="website" value="" style={{ height: "30px", width: "100%" }} /><br /><br/>
                        <label for="address">Address</label><br />
                        <input type="text" id="address" name="address" value="" style={{ height: "80px", width: "100%" }} /><br /><br/>
                        <input style={{ marginLeft: "500px", background: "#468c00", padding: "10px 25px 10px 25px", border: "none", color: "white" }} type="submit" value="Add" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ShowForm;



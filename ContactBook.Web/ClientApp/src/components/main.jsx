import $ from 'jquery';


const viewBox = document.querySelector("#viewBox");

function showContactInfo(id) {
    const contact = contacts.find(c => c.id === id);
    viewBox.innerHTML = `<p style="font-size:30px; font-weight:bold; color:#333333">${contact.name}
    <a><img src="../Images/edit1.jpg">Edit</a>
    <a><img src="../Images/delete1.png">Delete</a>
    </p><br>
    <p>Email: ${contact.email}</p><br>
    <p>Mobile: +91 ${contact.mobile}</p>
    <p>Landline: ${contact.landline}</p><br>
    <p>Website: https://${contact.website}</p><br>
    <p>Address: ${contact.address}</p><br>
    `;
}



function showForm() {
    viewBox.innerHTML =
        `<div style="box-shadow: 0 0 10px 10px grey;">
    <form onsubmit="addNewContact()" style="padding:30px">
  <label for="name">Name</label><br />
  <input type="text" id="name" name="name" value="" style="height:30px; width:100%"/><br /><br>
  <label for="email">Email</label><br />
  <input type="text" id="email" name="email" value="" style="height:30px; width:100%"/><br /><br>
  <label for="mobile">Mobile</label></br>
  <input type="text" id="mobile" name="mobile" value="" style="height:30px; width:100% display:inline-block"/>
  <label for="landline">Landline</label>
  <input type="text" id="landline" name="landline" value="" style="height:30px; width:50% display:inline-block"/><br /><br>
  <label for="website">Website</label><br />
  <input type="text" id="website" name="website" value="" style="height:30px; width:100%"/><br /><br>
  <label for="address">Address</label><br />
  <input type="text" id="address" name="address" value="" style="height:80px; width:100%"/><br /><br>
  <input style="margin-left:500px; background:#468c00; padding:10px 25px 10px 25px; border:none; color:white"type="submit"  value="Add" />
</form>
</div>
    `
        ;

}

let contacts = [
    {
        id: 1,
        name: "Chandermani Arora",
        email: "chandermani@technovert.com",
        mobile: "904 543 6009",
        landline: "786 21 3612456",
        website: "gooogle.com",
        address: "52 A/2 Mathura"
    },
    {
        id: 2,
        name: "Vaibhav Taunk",
        email: "vaibhav.T@technovert.com",
        mobile: "904 587 6765",
        landline: "876 34 8364298",
        website: "yahoo.com",
        address: "123 Hyderawad"
    },
    {
        id: 3,
        name: "Bhagavan",
        email: "Bhagawan.T@technovert.com",
        mobile: "876 543 6009",
        landline: "879 63 2785437",
        website: "microsoft.com",
        address: "876 Mathura "
    },
    {
        id: 4,
        name: "Pujitha",
        email: "pujitha.k@technovert.com",
        mobile: "835 443 6009",
        landline: "323 42 7354238",
        website: "technovert.com",
        address: "345 Mathura"
    }
]


function renderContacts() {
    let htmlString;
    let contactList = document.querySelector("#contactList");
    contacts.forEach(contact => {
        htmlString += `<div class="boxes" id="box1" onclick="showContactInfo(${ contact.id })">
        <p style="padding-bottom: 5px; font-size:28px;">${contact.name}</p>
        <p style="margin-left:5px">${contact.email}</p>
        <p style="padding-bottom: 5px; margin-left:5px">+91 ${contact.mobile}</p>
      </div>`;
    });
    contactList.innerHTML = htmlString;
}

function addNewContact() {
    contacts.push(
        {
            id: window.length(contacts) + 1,
            name: $("#name"),
            email: $("#email"),
            mobile: $("#mobile"),
            landline: $("#landline"),
            website: $("#website"),
            address: $("#address")
        }
    )
    renderContacts();
}

renderContacts();
showContactInfo(contacts[0].id);

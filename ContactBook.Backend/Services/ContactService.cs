using ContactBook.Backend.Models;
using ContactBook.Backend.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;

namespace ContactBook.Backend.Services
{
    public class ContactService : IContactService
    {
        public ContactService(ContactContext context) {
            this.context = context; 
        }
        public ContactContext context { get;  set; }
        public void Create(PostContact contact)
        {
            Contact cont = new Contact 
            {
                Name= contact.Name,
                Email= contact.Email,
                Address= contact.Address,
                Mobile= contact.Mobile,
                Landline= contact.Landline,
                Website= contact.Website
            };
            context.Contacts.Add(cont);
            context.SaveChanges();
        }

        //public void Create(string name,string email, string mobile, string landline, string website, string address )
        //{
        //    Contact cont = new Contact
        //    {
        //        Name = name,
        //        Email = email,
        //        Address = address,
        //        Mobile = mobile,
        //        Landline = landline,
        //        Website = website
        //    };
        //    context.Contacts.Add(cont);
        //    context.SaveChanges();
        //}
        public List<Contact> Get()
        {
            return context.Contacts.ToList();
            
        }
        public void Delete(int contactId) 
        {
            var a = context.Contacts.Single(x => x.id == contactId);
            context.Contacts.Remove(a);
            context.SaveChanges();
        }
        //public void Update(int id, [Optional] string name, [Optional] string email, [Optional] string mobile,
        //    [Optional] string landline, [Optional] string website, [Optional] string address) 
        //{
        //    var x = context.Contacts.Single(y => y.id == id);
        //    x.Name = name;
        //    x.Email = email;
        //    x.Mobile = mobile;
        //    x.Landline = landline;
        //    x.Website = website;
        //    x.Address = address;
        //    context.Contacts.Update(x);
        //    context.SaveChanges();
        //}
        public void Update(Contact updatedContact)
        {
            var x = context.Contacts.Single(y => y.id == updatedContact.id);
            x.Name = updatedContact.Name;
            x.Email = updatedContact.Email;
            x.Mobile = updatedContact.Mobile;
            x.Landline = updatedContact.Landline;
            x.Website = updatedContact.Website;
            x.Address = updatedContact.Address;
            //x.Name = name;
            //x.Email = email;
            //x.Mobile = mobile;
            //x.Landline = landline;
            //x.Website = website;
            //x.Address = address;
            //context.Contacts.Update(x);
            context.SaveChanges();
        }

    }

}

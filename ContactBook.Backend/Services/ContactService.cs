using ContactBook.Backend.Models;
using ContactBook.Backend.Services.Interface;
using System.Collections.Generic;
using System.Linq;

namespace ContactBook.Backend.Services
{
    public class ContactService : IContactService
    {
        public ContactService(ContactContext context) {
            this.context = context; 
        }
        public ContactContext context { get;  set; }
        public bool Create(string contact) 
        {
            //context.Contacts.Add(contact);
            return true ;
        }
        public List<Contact> Get()
        {
            return context.Contacts.ToList();
            
        }

    }

}

using ContactBook.Backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace ContactBook.Backend.Services.Interface
{
    public interface IContactService
    {
        public void Create(PostContact contact);

        //public void Create(string name, string email, string mobile, string landline, string website, string address);
        public List<Contact> Get();
        public void Delete(int contactId);

        public void Update(int id, string name, string email,
            string mobile, string landline, string website, string address);

    }
}

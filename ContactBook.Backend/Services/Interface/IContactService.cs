using ContactBook.Backend.Models;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;

namespace ContactBook.Backend.Services.Interface
{
    public interface IContactService
    {
        public void Create(PostContact contact);

        //public void Create(string name, string email, string mobile, string landline, string website, string address);
        public List<Contact> Get();
        public void Delete(int contactId);

        //public void Update(int id, [Optional] string name, [Optional] string email, [Optional] string mobile,
        //    [Optional] string landline, [Optional] string website, [Optional] string address);

        public void Update(Contact updatedContact);

    }
}

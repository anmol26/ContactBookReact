using ContactBook.Backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace ContactBook.Backend.Services.Interface
{
    public interface IContactService
    {
        public bool Create(string contact);
        //public bool Update(Contact contact);
        //public bool Delete(Contact contact);
        public List<Contact> Get();

    }
}

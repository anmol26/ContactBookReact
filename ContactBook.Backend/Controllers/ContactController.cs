using ContactBook.Backend.Models;
using ContactBook.Backend.Services.Interface;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.InteropServices;

namespace ContactBook.Backend.Controllers
{
    [Route("api/contact")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactService contactService;
        public ContactController(IContactService contactService)
        {
            this.contactService = contactService;
        }

        [Route("Get")]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(contactService.Get());
        }


        [Route("Create")]
        [HttpPost]
        public IActionResult Create(PostContact contact)
        {

            contactService.Create(contact);
            return Ok();
        }


        [Route("Delete")]
        [HttpDelete]
        public IActionResult Delete(int contactId)
        {

            contactService.Delete(contactId);
            return Ok();
        }

        //[Route("Update")]
        //[HttpPatch]
        //public IActionResult Update(int id, [Optional]string name, [Optional]string email, [Optional]string mobile,
        //    [Optional]string landline, [Optional]string website, [Optional]string address) 
        //{
        //    contactService.Update(id, name, email, mobile, landline, website, address);
        //    return Ok();
        //}
        [Route("Update")]
        [HttpPatch]
        public IActionResult Update(Contact updatedContact)
        {
            contactService.Update(updatedContact);
            return Ok();
        }

    }
}

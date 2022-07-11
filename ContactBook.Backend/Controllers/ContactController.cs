using ContactBook.Backend.Models;
using ContactBook.Backend.Services.Interface;
using Microsoft.AspNetCore.Mvc;


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

        //[Route("Create")]
        //[HttpPost]
        //public IActionResult Create(string name,string email,string mobile,
        //                               string landline,string website, string address)
        //{

        //    contactService.Create(name,email,mobile,landline,website,address);
        //    return Ok();
        //}

        [Route("Delete")]
        [HttpDelete]
        public IActionResult Delete(int contactId)
        {

            contactService.Delete(contactId);
            return Ok();
        }

        [Route("Update")]
        [HttpPatch]
        public IActionResult Update(int id, string name, string email, string mobile,
            string landline, string website, string address) 
        {
            contactService.Update(id, name, email, mobile, landline, website, address);
            return Ok();
        }
    }
}

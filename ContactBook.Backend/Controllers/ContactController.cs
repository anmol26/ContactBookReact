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


        [Route("Delete")]
        [HttpDelete]
        public IActionResult Delete(int contactId)
        {

            contactService.Delete(contactId);
            return Ok();
        }

        [Route("Update")]
        [HttpPatch]
        public IActionResult Update(Contact updatedContact)
        {
            contactService.Update(updatedContact);
            return Ok();
        }

    }
}

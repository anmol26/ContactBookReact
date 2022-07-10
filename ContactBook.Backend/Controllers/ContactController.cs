using ContactBook.Backend.Models;
using ContactBook.Backend.Services.Interface;
using Microsoft.AspNetCore.Mvc;

namespace ContactBook.Backend.Controllers
{
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

        //[Route({create})]
        [HttpPost]

        public IActionResult Create(string contact) {

            bool result= contactService.Create(contact);
            return Ok(result);
        }
    }
}

using Microsoft.EntityFrameworkCore;

namespace ContactBook.Backend.Models

{
    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions options): base(options) 
        {
        }
        public DbSet<Contact> Contacts { get; set; }
    }
}

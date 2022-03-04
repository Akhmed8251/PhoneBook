using Microsoft.EntityFrameworkCore;

namespace PhoneBook.Models
{
    public class PhoneBookContext : DbContext
    {
		public DbSet<Customer> Customers { get; set; }
		public DbSet<Structure> Structures { get; set; }
		public PhoneBookContext(DbContextOptions<PhoneBookContext> options)
			: base(options)
		{
			Database.EnsureCreated();   // создаем базу данных при первом обращении
		}
	}
}

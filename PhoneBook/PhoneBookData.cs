using PhoneBook.Models;

namespace PhoneBook
{
    public class PhoneBookData
	{
		public static void Initialize(PhoneBookContext context)
		{
			foreach (var cust in context.Customers)
            {
				cust.Structure = context.Structures.FirstOrDefault(p => p.Id == cust.StructureId);
            }
        }
	}
}
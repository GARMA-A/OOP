namespace FileCrudApi
{
    // Main program class - entry point of application
    class Program
    {
        // Main method - this is where program execution begins
        static void Main(string[] args)
        {
            // Create FileManager instance - this handles our file operations
            var fileManager = new FileManager("people.json");

            // Create CRUD service - this handles our business logic
            var crudService = new PersonCrudService(fileManager);

            // Demo the CRUD operations
            Console.WriteLine("=== C# CRUD API Demo ===\n");

            // CREATE - Add some people
            Console.WriteLine("Creating people...");
            var person1 = crudService.CreatePerson("John Doe", "john@email.com", 30);
            var person2 = crudService.CreatePerson("Jane Smith", "jane@email.com", 25);
            var person3 = crudService.CreatePerson("Bob Johnson", "bob@email.com", 35);

            Console.WriteLine($"Created: {person1}");
            Console.WriteLine($"Created: {person2}");
            Console.WriteLine($"Created: {person3}");
            Console.WriteLine();

            // READ - Get all people
            Console.WriteLine("All people:");
            var allPeople = crudService.GetAllPeople();
            foreach (var person in allPeople) // foreach loop iterates through each item
            {
                Console.WriteLine(person);
            }
            Console.WriteLine();

            // READ - Get specific person
            Console.WriteLine("Getting person with ID 2:");
            var specificPerson = crudService.GetPersonById(2);
            if (specificPerson != null) // Check if person was found
            {
                Console.WriteLine(specificPerson);
            }
            else
            {
                Console.WriteLine("Person not found");
            }
            Console.WriteLine();

            // UPDATE - Modify a person
            Console.WriteLine("Updating person with ID 2...");
            bool updateSuccess = crudService.UpdatePerson(2, "Jane Doe", "jane.doe@email.com", 26);
            if (updateSuccess)
            {
                Console.WriteLine("Update successful!");
                var updatedPerson = crudService.GetPersonById(2);
                Console.WriteLine($"Updated person: {updatedPerson}");
            }
            else
            {
                Console.WriteLine("Update failed - person not found");
            }
            Console.WriteLine();

            // SEARCH - Find people by name
            Console.WriteLine("Searching for people with 'John' in name:");
            var searchResults = crudService.SearchPeopleByName("John");
            foreach (var person in searchResults)
            {
                Console.WriteLine(person);
            }
            Console.WriteLine();

            // DELETE - Remove a person
            Console.WriteLine("Deleting person with ID 1...");
            bool deleteSuccess = crudService.DeletePerson(1);
            if (deleteSuccess)
            {
                Console.WriteLine("Delete successful!");
            }
            else
            {
                Console.WriteLine("Delete failed - person not found");
            }

            // Show final state
            Console.WriteLine("\nFinal list of people:");
            allPeople = crudService.GetAllPeople();
            foreach (var person in allPeople)
            {
                Console.WriteLine(person);
            }

            // Pause before closing (useful when running from IDE)
            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }
    }
}

namespace FileCrudApi
{
    // This class contains all CRUD operations (Create, Read, Update, Delete)
    public class PersonCrudService
    {
        // Private field to handle file operations
        private readonly FileManager _fileManager;

        // Constructor - dependency injection pattern (FileManager is injected)
        public PersonCrudService(FileManager fileManager)
        {
            _fileManager = fileManager;
        }

        // CREATE - Add a new person
        public Person CreatePerson(string name, string email, int age)
        {
            // Load existing people from file
            var people = _fileManager.ReadAllPeople();

            // Generate new ID - find highest existing ID and add 1
            // DefaultIfEmpty(0) handles case when list is empty
            int newId = people.Any() ? people.Max(p => p.Id) + 1 : 1;

            // Create new Person object
            var newPerson = new Person(newId, name, email, age);

            // Add to list and save back to file
            people.Add(newPerson);
            _fileManager.WriteAllPeople(people);

            return newPerson; // Return the created person
        }

        // READ - Get all people
        public List<Person> GetAllPeople()
        {
            return _fileManager.ReadAllPeople();
        }

        // READ - Get person by ID
        public Person? GetPersonById(int id) // ? means this method can return null
        {
            var people = _fileManager.ReadAllPeople();

            // LINQ method to find first person with matching ID, or null if not found
            return people.FirstOrDefault(p => p.Id == id);
        }

        // UPDATE - Modify existing person
        public bool UpdatePerson(int id, string name, string email, int age)
        {
            var people = _fileManager.ReadAllPeople();

            // Find the person to update
            var personToUpdate = people.FirstOrDefault(p => p.Id == id);

            // If person not found, return false
            if (personToUpdate == null)
            {
                return false;
            }

            // Update the person's properties
            personToUpdate.Name = name;
            personToUpdate.Email = email;
            personToUpdate.Age = age;

            // Save changes back to file
            _fileManager.WriteAllPeople(people);

            return true; // Return true to indicate success
        }

        // DELETE - Remove person by ID
        public bool DeletePerson(int id)
        {
            var people = _fileManager.ReadAllPeople();

            // Find the person to delete
            var personToDelete = people.FirstOrDefault(p => p.Id == id);

            // If person not found, return false
            if (personToDelete == null)
            {
                return false;
            }

            // Remove person from list
            people.Remove(personToDelete);

            // Save changes back to file
            _fileManager.WriteAllPeople(people);

            return true; // Return true to indicate success
        }

        // Bonus method - Search people by name (partial match)
        public List<Person> SearchPeopleByName(string searchTerm)
        {
            var people = _fileManager.ReadAllPeople();

            // LINQ Where method filters based on condition
            // StringComparison.OrdinalIgnoreCase makes search case-insensitive
            return people.Where(p => p.Name.Contains(searchTerm, StringComparison.OrdinalIgnoreCase))
                        .ToList(); // Convert result to List
        }
    }
}

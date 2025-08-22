using System.Text.Json; // This was missing! Needed for JsonSerializer

namespace FileCrudApi
{

    // This class handles all file operations - it's responsible for saving/loading data
    public class FileManager
    {
        // Private field - only this class can access it directly
        private readonly string _filePath;

        // Constructor takes the file path where data will be stored
        public FileManager(string filePath)
        {
            _filePath = filePath;
            // Create the file if it doesn't exist
            EnsureFileExists();
        }

        // Private method - only used internally by this class
        private void EnsureFileExists()
        {

            // File.Exists checks if file exists, if not, create empty JSON array
            if (!File.Exists(_filePath))
            {
                File.WriteAllText(_filePath, "[]"); // Empty JSON array
            }
        }

        // Method to read all people from file
        public List<Person> ReadAllPeople()
        {
            try
            {
                // Read all text from file
                string jsonContent = File.ReadAllText(_filePath);

                // Deserialize JSON string into List of Person objects
                // JsonSerializer converts JSON back to C# objects
                var people = JsonSerializer.Deserialize<List<Person>>(jsonContent);

                // Return the list, or empty list if null (defensive programming)
                return people ?? new List<Person>();
            }
            catch (Exception ex) // Catch any errors that might occur
            {
                // In real applications, you'd log this error
                Console.WriteLine($"Error reading file: {ex.Message}");
                return new List<Person>(); // Return empty list on error
            }
        }

        // Method to save all people to file
        public void WriteAllPeople(List<Person> people)
        {
            try
            {
                // JsonSerializerOptions configures how JSON is formatted
                var options = new JsonSerializerOptions
                {
                    WriteIndented = true // Makes JSON pretty-printed (readable)
                };

                // Convert List of Person objects to JSON string
                string jsonContent = JsonSerializer.Serialize(people, options);

                // Write JSON string to file
                File.WriteAllText(_filePath, jsonContent);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error writing file: {ex.Message}");
                throw; // Re-throw exception so calling code knows something went wrong
            }
        }
    }
}

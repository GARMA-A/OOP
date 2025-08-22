namespace FileCrudApi
{
    // A class to represent our data model - this is like a blueprint for our objects
    public class Person
    {
        // Properties are like variables that belong to the class
        // { get; set; } creates automatic getter and setter methods
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty; // = string.Empty sets a default value
        public string Email { get; set; } = string.Empty;
        public int Age { get; set; }

        // Constructor - this method runs when you create a new Person object
        public Person() { }

        // Constructor with parameters - allows creating Person with initial values
        public Person(int id, string name, string email, int age)
        {
            Id = id;
            Name = name;
            Email = email;
            Age = age;
        }

        // Override ToString method to customize how Person objects are displayed
        public override string ToString()
        {
            return $"ID: {Id}, Name: {Name}, Email: {Email}, Age: {Age}";
        }
    }
}

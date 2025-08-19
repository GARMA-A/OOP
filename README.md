# OOP in C#

## `public` keyword
<p>
    this mean i can access this class ,field , method from anywhere in my code.
</p>

## `private` keyword
<p>
    this mean i canot access this class ,field ,method from anywhere outside the class itself.
</p>

## `protected` keyword
<p>
    this mean i can access this class ,field ,method from anywhere in the class itself and in the derived classes (child classes).
</p>

## `static` keyword
```cs
class Counter
{
    public static int Count = 0;

    public Counter()
    {
        Count++; // shared by all objects
    }
}

// Usage:
var c1 = new Counter();
var c2 = new Counter();
Console.WriteLine(Counter.Count); // 2 (shared, not separate per object)

```
```cs
public static class MathHelper
{
    public static double Square(double x)
    {
        return x * x;
    }
}

// Usage:
double result = MathHelper.Square(5); // No "new", called on the class itself
//A static class cannot be instantiated (you can’t use new on it).
// WARN:
double result2 = new MathHelper().Square(5); // This will not compile

```
```cs
class Config
{
    public static string AppName;

    static Config()
    {
        AppName = "MyApp"; // runs once
    }
}
//Runs only once, before the class is used for the first time.
//Used to initialize static fields.
```
### method override 
<p>
    this is when child class implement the same method of the parent class
    but with different body 
</p>

### method  overload
<p>
    this is when you have multiple methods with the same name but different parameters (different type or number of parameters).
</p>

### Encapsulation
<p>
    is the bundling of data and methods that operate on that data within a single unit, or class. It restricts direct access to some of an object's components, which can prevent the accidental modification of data. Encapsulation is achieved through access modifiers like `public`, `private`, `protected`, and `internal`.
</p>



1. Describe the pros and cons of using classes in JavaScript 

Pros: 
- The use of classes is easier to understand (and read) than the previous objected orientated syntax.
- It's an optional feature and there are many other ways to create objects like factory functions
- Class is something everyone learns and making the syntax better is a good things. 

Cons:
- Classes have never REALLY existed in JS, so to use them is just syntactical sugar 
- It can be seen as a crutch which removes people for learning functional programming
- Classes tend to make things more brittle. Prototypes are better and move flexible.
- Learning curve: Classes can have a steep learning curve, especially for programmers who are not familiar with object-oriented programming. It can take time and effort to learn how to create and use classes effectively.

2. How does JS's object creation differ from a language like Java or Ruby? 

JavaScript's object creation is more flexible and dynamic compared to Java and Ruby. It uses prototypal inheritance, dynamic typing, object literal syntax, and first-class functions to provide a concise and powerful way to create and manipulate objects.

3. Describe the difference between object constructors and classes.

Both object constructors and classes are used to create objects in JavaScript, but classes provide a more familiar syntax for developers coming from class-based languages and support inheritance using the extends keyword. Object constructors are a common pattern in JavaScript for creating objects that share a common structure and behavior, and they use the function prototype to define methods for the object. Object classes are relatively new for JS. 

4. What are 'getters' and 'setters'?
Getters and Setters are part of the accessor property. Accessor properties are essentially functions that execute on getting and setting a value, but look like regular properties to an external code. Getters are methods that are used to retrieve the value of a property. They are defined using the get keyword followed by the property name. Setters are methods that are used to set the value of a property. They are defined using the set keyword followed by the property name.

5. Describe computed names and class fields.

Computed names allow object property names and class method names to be computed at runtime using an expression enclosed in square brackets ([ ]). This feature allows for more dynamic and flexible object and class definition.

Class fields provide a way to define instance variables and static variables directly inside a class definition, without the need for a constructor or a static initializer. This feature simplifies the syntax for defining and initializing class properties, and it also allows for more concise and readable code.

6. Describe function binding.

Function binding refers to the process of explicitly setting the this value of a function. The this keyword in JavaScript is a reference to the object that the function is a method of or the global object if the function is called standalone. However, sometimes it is desirable to change the value of this inside a function to a specific object.

7. Describe static properties 

A static property is a property that belongs to a class itself, rather than to an instance of the class. That is, it is a property that is shared by all instances of the class, rather than being unique to each instance.

To define a static property in a class, you can use the static keyword followed by the name of the property.

8. How is inheritance used with classes?

Inheritance is an important concept in object-oriented programming, and it is used in JavaScript classes to create a hierarchy of classes with shared properties and methods.

In JavaScript, classes can inherit properties and methods from other classes using the extends keyword. 

9. Why is favoring Composition over Inheritance suggested?

Favoring composition over inheritance is a design principle that suggests that it is generally better to use composition (combining simpler parts to form a more complex whole) rather than inheritance (creating new classes by extending existing ones) to achieve code reuse and flexibility.

The main reason for favoring composition over inheritance is that inheritance can lead to complex and brittle class hierarchies, where changes made to the base class can have unexpected effects on the derived classes. In contrast, composition allows for more flexible and modular code, since it allows you to build complex objects out of simpler, reusable components.

Here are some of the benefits of using composition over inheritance:

Code reuse: By breaking down complex functionality into smaller, reusable components, you can build more flexible and modular code that is easier to reuse in different contexts.

Flexibility: Composition allows you to combine different components in different ways to create new objects with different behaviors. This makes it easier to adapt to changing requirements or to create variations on existing functionality.

Testability: By breaking down functionality into smaller components, you can write more focused and targeted tests that are easier to maintain and debug.

Avoidance of the fragile base class problem: Inheritance can lead to complex and brittle class hierarchies, where changes made to the base class can have unexpected effects on the derived classes. Composition avoids this problem by keeping the behavior of each component separate and modular.

Overall, favoring composition over inheritance can lead to more flexible, modular, and maintainable code. However, there are still cases where inheritance is appropriate, such as when you need to enforce a strict class hierarchy or when you need to extend the functionality of an existing class in a relatively simple and straightforward way.










/**
 * Functional Constructor for Person
 * Creates a person with name and age, includes error handling for invalid age
 */
function Person(name, age) {
    // Validate that age is a positive number
    if (typeof age !== 'number' || age <= 0 || isNaN(age)) {
        throw new Error('Age must be a positive number');
    }
    
    // Set properties
    this.name = name;
    this.age = age;
    
    // Add greet method to each instance (not prototype)
    this.greet = function() {
        return `Hello, my name is ${this.name}`;
    };
}

// Export for Node.js environments (if applicable)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Person;
}
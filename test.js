/**
 * Simple test file for Person functional constructor
 * Tests all required scenarios
 */

// Load Person constructor (works in both browser and Node.js)
if (typeof module !== 'undefined' && module.exports) {
    var Person = require('./person.js');
}

function runTests() {
    console.log('Running Person Constructor Tests...\n');
    
    let testsPassed = 0;
    let testsTotal = 0;
    
    function test(description, testFn) {
        testsTotal++;
        try {
            testFn();
            console.log(`✅ ${description}`);
            testsPassed++;
        } catch (error) {
            console.log(`❌ ${description}`);
            console.log(`   Error: ${error.message}`);
        }
    }
    
    // Test 1: Valid person creation and greeting
    test('Valid person creation with positive age', () => {
        const person = new Person("John", 25);
        if (person.name !== "John" || person.age !== 25) {
            throw new Error("Person properties not set correctly");
        }
    });
    
    // Test 2: Greet method returns correct message
    test('Greet method returns correct message', () => {
        const person = new Person("John", 25);
        const greeting = person.greet();
        const expected = "Hello, my name is John";
        if (greeting !== expected) {
            throw new Error(`Expected "${expected}", got "${greeting}"`);
        }
    });
    
    // Test 3: Each instance has its own greet method
    test('Each instance has its own greet method', () => {
        const person1 = new Person("Alice", 30);
        const person2 = new Person("Bob", 40);
        if (person1.greet === person2.greet) {
            throw new Error("Instances share the same greet method");
        }
    });
    
    // Test 4: Error for negative age
    test('Throws error for negative age', () => {
        try {
            new Person("Alice", -5);
            throw new Error("Should have thrown an error for negative age");
        } catch (error) {
            if (!error.message.includes('positive number')) {
                throw new Error("Wrong error message for negative age");
            }
        }
    });
    
    // Test 5: Error for zero age
    test('Throws error for zero age', () => {
        try {
            new Person("Bob", 0);
            throw new Error("Should have thrown an error for zero age");
        } catch (error) {
            if (!error.message.includes('positive number')) {
                throw new Error("Wrong error message for zero age");
            }
        }
    });
    
    // Test 6: Error for non-numeric age
    test('Throws error for non-numeric age', () => {
        try {
            new Person("Carol", "abc");
            throw new Error("Should have thrown an error for non-numeric age");
        } catch (error) {
            if (!error.message.includes('positive number')) {
                throw new Error("Wrong error message for non-numeric age");
            }
        }
    });
    
    // Test 7: Error for NaN age
    test('Throws error for NaN age', () => {
        try {
            new Person("Dave", NaN);
            throw new Error("Should have thrown an error for NaN age");
        } catch (error) {
            if (!error.message.includes('positive number')) {
                throw new Error("Wrong error message for NaN age");
            }
        }
    });
    
    console.log(`\nTest Results: ${testsPassed}/${testsTotal} tests passed`);
    
    if (testsPassed === testsTotal) {
        console.log('🎉 All tests passed!');
        return true;
    } else {
        console.log('❌ Some tests failed');
        return false;
    }
}

// Run tests if this file is executed directly
if (typeof window === 'undefined') {
    runTests();
} else {
    // In browser, expose the function globally
    window.runTests = runTests;
}
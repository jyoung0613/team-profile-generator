const Employee = require('../lib/Employee');

describe("Employee", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id and email address if provided valid arguments", () => {
            const employee = new Employee('John Young', 3, "jwyoung0613@gmail.com");

            expect(employee.name).toEqual("John Young");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("jwyoung0613@gmail.com");
        })
    });

    describe("Name", () => {
        it("Should set the Name via the constructor function", () => {
            const input = 'John Young';
            const expected = {"name": "John Young", "id": 1, "email": "name@name.com"};

            const result = new Employee(input, 1, "name@name.com");

            expect(result).toEqual(expected);
        });
    });

    describe("Employee ID", () => {
        it("Should set the Employee ID via the constructor function", () => {
            const input = 100;
            const expected = {"name": "First Last", "id": 100, "email": "name@name.com"};

            const result = new Employee("First Last", input, "name@name.com");

            expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should set the Email via the constructor function", () => {
            const input = "jwyoung0613@gmail.com";
            const expected = {"name": "First Last", "id": 1, "email": "jwyoung0613@gmail.com"};

            const result = new Employee("First Last", 1, input);

            expect(result).toEqual(expected);
        });
    });

});

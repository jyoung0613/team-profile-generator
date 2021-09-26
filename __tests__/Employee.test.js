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

});

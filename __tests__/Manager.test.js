const Manager = require('../lib/Manager');

describe("Manager", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, email address and office number if provided valid arguments", () => {
            const manager = new Manager("John Young", 3, "jwyoung0613@gmail.com", "654");

            expect(manager.name).toEqual("John Young");
            expect(manager.id).toEqual(3);
            expect(manager.email).toEqual("jwyoung0613@gmail.com");
            expect(manager.officeNumber).toEqual("654");
            expect(manager.role).toEqual("Manager");
        })
    });

    describe("OfficeNumber", () => {
        it("Should set the Office Number via the constructor function", () => {
            const input = "42";
            const result = new Manager("Name", 1, "name@name.com", input).getOfficeNumber();

            expect(input).toEqual(result);
        });
    });
});
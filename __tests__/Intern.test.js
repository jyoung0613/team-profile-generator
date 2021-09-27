const Intern = require('../lib/Intern');

describe("Intern", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, email address and school if provided valid arguments", () => {
            const intern = new Intern("John Young", 3, "jwyoung0613@gmail.com", "UofU");

            expect(intern.name).toEqual("John Young");
            expect(intern.id).toEqual(3);
            expect(intern.email).toEqual("jwyoung0613@gmail.com");
            expect(intern.school).toEqual("UofU");
            expect(intern.role).toEqual("Intern");
        })
    });

    describe("School", () => {
        it("Should set the School via the constructor function", () => {
            const input = "University of Utah";
            const result = new Intern("Name", 1, "name@name.com", input).getSchool();

            expect(input).toEqual(result);
        });
    });
});
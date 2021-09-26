const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, email address, GitHub Username, role, and cardHTML if provided valid arguments", () => {
            const engineer = new Engineer("John Young", 3, "jwyoung0613@gmail.com", "jyoung0613");

            expect(engineer.name).toEqual("John Young");
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual("jwyoung0613@gmail.com");
            expect(engineer.github).toEqual("jyoung0613");
            expect(engineer.role).toEqual("Engineer");
        })
    })

    describe("GitHub", () => {
        it("Should set the GitHub UserName via the constructor function", () => {
            const input = "jyoung0613";
            const result = new Engineer("Name", 1, "name@name.com", input).getGitHub();

            expect(input).toEqual(result);
        });
    });
});
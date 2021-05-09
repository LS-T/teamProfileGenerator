const Intern = require('../lib/Intern');

describe("Employee", () => {
    describe("Intern", () => {
      describe("Initialization", () => {
        it("should create an Intern object that includes name, email, id, and school", () => {
          const Jane = new Intern("Jane", 44, "Jane@who.com", "Jane academy");
          expect(Jane.name).toEqual("Jane");
          expect(Jane.id).toEqual(44);
          expect(Jane.email).toEqual("Jane@who.com");
          expect(Jane.school).toEqual("Jane academy");
        });
      });
    });
  });
  
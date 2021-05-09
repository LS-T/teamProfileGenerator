const Manager = require('../lib/Manager');

describe("Employee", () => {
    describe("Manager", () => {
      describe("Initialization", () => {
        it("should create an Manager object that includes name, email, id, and office number", () => {
          const Omar = new Manager("Omar", 77, "Omar@omaristheboss.com", 7);
          expect(Omar.name).toEqual("Omar");
          expect(Omar.id).toEqual(77);
          expect(Omar.email).toEqual("Omar@omaristheboss.com");
          expect(Omar.officeNumber).toEqual(7);
        });
      });
    });
  });
  
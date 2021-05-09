const Engineer = require("../lib/Engineer");

describe("Employee", () => {
  describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an Engineer object that includes name, email, id, and github username", () => {
        const Alan = new Engineer("Alan", 33, "Alan@ftw.com", "Alan-x");
        expect(Alan.name).toEqual("Alan");
        expect(Alan.id).toEqual(33);
        expect(Alan.email).toEqual("Alan@ftw.com");
        expect(Alan.github).toEqual("Alan-x");
      });
    });
  });
});

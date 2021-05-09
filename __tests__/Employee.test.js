const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("initialization", () => {
    it("an object should be created with a name, email, and id", () => {
      let John = new Employee("John", 22, "John@basic.com");
      expect(John.name).toEqual("John");
      expect(John.id).toEqual(22);
      expect(John.email).toEqual("John@basic.com");
    });
  });
});

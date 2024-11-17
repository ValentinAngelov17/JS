const Validator = require("./validator");

describe("Validator", () => {
    const validator = new Validator();

    test("defines setRule()", () => {
        expect(typeof validator.setRule).toBe("function");
    });

    test("setRule() returns undefined when called", () => {
        expect(validator.setRule()).toBeUndefined();
      });
});
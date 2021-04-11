const Employee = require("../lib/Employee");

const cynthia = new Employee('Cynthia', 1000, 'cynthia@company.com');

describe("creates a new Employee object", () => {
    it("should return a name passed into the Employee constructor function", () => {
        expect(cynthia.name).toEqual('Cynthia');
        expect(cynthia.name).toEqual(expect.any(String));
    });

    it('should return an id when passed to the function', () => {
        expect(cynthia.id).toEqual(1000);
        expect(cynthia.id).toEqual(expect.any(Number));
    })
    it('should return an email when passed to the function', () => {
        expect(cynthia.email).toEqual('cynthia@company.com');
        expect(cynthia.email).toEqual(expect.any(String));
    })
});
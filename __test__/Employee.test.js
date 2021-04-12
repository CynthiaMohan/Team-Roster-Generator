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

describe("Function getName", () => {
    it("Should get a name via getName()", () => {
        expect(cynthia.getName()).toEqual('Cynthia');
        expect(cynthia.getName()).toEqual(expect.any(String));
    })
})
describe("Function getId", () => {
    it("Should get an Id via getId()", () => {
        expect(cynthia.getId()).toEqual(1000);
        expect(cynthia.getId()).toEqual(expect.any(Number));
    })
})
describe("Function getEmail", () => {
    it("Should get an Email via getEmail()", () => {
        expect(cynthia.getEmail()).toEqual('cynthia@company.com');
        expect(cynthia.getEmail()).toEqual(expect.any(String));
    })
})

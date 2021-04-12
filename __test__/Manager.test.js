const Manager = require('../lib/Manager');

const cynthia = new Manager('Cynthia', 1000, 'cynthia@company.com', 123456789);

describe("Creates a Manager object", () => {
    it('should return a phone number passed to the constructor function', () => {
        expect(cynthia.officeNumber).toEqual(123456789);
        expect(cynthia.officeNumber).toEqual(expect.any(Number));
    })
});
describe("Function getdetails", () => {
    it("Should get details via getdetails()", () => {
        expect(cynthia.getdetails()).toEqual(123456789);
        expect(cynthia.getdetails()).toEqual(expect.any(Number));
    })
});
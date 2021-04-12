const Intern = require('../lib/Intern');

const cynthia = new Intern('Cynthia', 1000, 'cynthia@company.com', 'UCBerkeley');
describe('If a new Intern object is created', () => {
    it('should return a school when passed through the constructor function', () => {
        expect(cynthia.school).toEqual('UCBerkeley');
        expect(cynthia.school).toEqual(expect.any(String));
    })
});
describe("Function getdetails", () => {
    it("Should get details via getdetails()", () => {
        expect(cynthia.getdetails()).toEqual('UCBerkeley');
        expect(cynthia.getdetails()).toEqual(expect.any(String));
    })
})
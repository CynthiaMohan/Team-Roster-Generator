const Manager = require('../lib/Manager');

const cynthia = new Manager('Cynthia', 1000, 123456789);

describe("Creates a Manager object", () => {
    it('should return a phone number passed to the constructor function', () => {
        expect(cynthia.phone).toEqual(123456789);
        expect(cynthia.phone).toEqual(expect.any(Number));
    })
});

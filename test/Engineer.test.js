const Engineer = require('../lib/Engineer');

const cynthia = new Engineer('Cynthia', 1000, 'cynthia@company.com', 'CynthiaMohan');

describe('Creates a new Engineer Object', () => {
    it('should return a github username when passed through the constructor function', () => {
        expect(cynthia.github).toEqual('CynthiaMohan');
        expect(cynthia.github).toEqual(expect.any(String));
    })
});
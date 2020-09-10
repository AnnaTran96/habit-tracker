const expect = require('chai').expect;
const rewire = require('rewire')

let login = rewire('../routes/login.js');

describe ('functionname', () => {
    let functionname = app.__get__('functionname');
    
    it('should be a function', () => {
		// our assertion here using chai's library
		// starting with expect because that's what we imported from chai
		expect(addThese).to.be.a('function');
	});
	it('should take 2 arguments and add them', () => {
		expect(addThese(1, 2)).to.equal(3);
	});

});
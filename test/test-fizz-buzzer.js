const should = require('chai').should;
const fizzBuzzer = require('../fizzBuzzer.js');

describe('should return fizz buzz properties', function(){
	it('should return fizz or buzz appropriately', function(){
		const goodInputs = [
			{in: 15, returns: 'fizz-buzz'},
			{in: 5, returns: 'buzz'},
			{in: 3, returns: 'fizz'},
			{in: 4, returns: 4},
			{in: 30, returns: 'fizz-buzz'}
		]
		goodInputs.forEach(function(input){
			answer = fizzBuzzer(input.in);
			answer.should.equal(input.returns);
		})
	});

	it('input should be number', function(){
		const badInputs = [false, 'word', [1, 2], {yes: 'no'}];
		badInputs.forEach(function(input){
			(function(){
				fizzBuzzer(input);
			}).should.throw(Error);		
		});

	});
});

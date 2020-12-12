// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validateRequiredField');
var validatePhoneNumber = require('../app/validatePhoneNumber');

describe("Testing Input Required", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validInput('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validInput(4));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validInput(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validInput('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validInput('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validInput('undefined'));
	});
	
	it("The value 'a 4' should pass", function(){
		assert.isTrue(validInput('a 4'));
	});
	
});	//end "Testing Input Required"

describe("Testing Valid Phone Number", function(){
	
	it("Input is required", function(){
		assert.isFalse(validatePhoneNumber());
	});
	it("Input must be numeric (phone# with dashes)", function(){
		assert.isFalse(validatePhoneNumber("515-555-0000"))
	});
	it("Input must be integers (with decimal)", function(){
		assert.isFalse(validatePhoneNumber(515555000.0))
	});
	it("Input must be integers", function(){
		assert.isTrue(validatePhoneNumber(5155550000))
	});
	it("Input must be 10 numbers (10 numbers)", function(){
		assert.isTrue(validatePhoneNumber(5155550000))
	});
	it("Input must be 10 numbers (11 numbers)", function(){
		assert.isFalse(validatePhoneNumber(51555500000))
	});
	
});
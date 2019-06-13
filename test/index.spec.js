

/*
 * When require('../WeEat/login'); is used, all code in login.js file is included.
 * Code not inside a function is immediately executed.
 * This creates a problem because some of that code requires references created
 * in the index.html file. 
 *
 * After doing some research, it seems like we need to figure out how to simulate
 * a browser test environment in order to have access to certain elements like
 * document and window which are used in our functions. Also, a firebase instance
 * with proper configurations needs to be initialized for the functions access
 * the firebase object.
 *
 * 
 *
 */

var index = require("../index");
var adminpanel = require("../funcsTest/adminpanel");
var login = require("../funcsTest/login");
var contacts = require("../funcsTest/contacts");

var firebase = require('firebase');
var chai = require("chai");
var request = require('supertest'); //HTTP post / get testing
var expect = chai.expect;

var divider = "\n==================================\n";

// login.js

describe(divider+'   Test File - login.js'+divider, function(){

// function login()
describe("Login Successful Test", function() {
    it("Login HTTP response status should be 200", function() {
        expect(login.login_t(0)).to.be.a("number");
    });
});

// function logout()
describe("Authenticated user can logout", function() {
    it("Logout HTTP response status should be 200", function() {
        expect(login.logout_t(0)).to.be.a("number");
    });
});

// function logout()
describe("Logout button appears when user Authenticates", function() {
    it("Logout button element should exist", function() {
        expect(index.addTwoNumbers(0, 0)).to.be.a("number");
    });
});

// function addNewPin()
describe("Add New Pin Test", function() {
    it("Created pin should be valid", function() {
        expect(index.addTwoNumbers(0, 0)).to.be.a("number");
    });
});

// addNewPin -> closePinModal
describe("Add New Pin Test", function() {
    it("Calls closePinModal", function() {
        expect(login.addNewPin_t()).to.be.a("number");
    });
});

// function getCoordinates
describe("Get Coordinates Test", function() {
    it("Returns coordinates from map", function() {
        expect(login.getCoordinates_t()).to.be.a("number");
    });
});

// function closePinModal
describe("Close Pin Modal Test", function() {
    it("Should close pin modal successfully", function() {
        expect(login.closePinModal_t()).to.be.a("number");
    });
});

// function displayMapAndPins()
describe("Display Map Test", function() {
    it("Map loads without error", function() {
        expect(login.displayMapAndPins_t()).to.be.a("number");
    });
});

// function displayMapAndPins()
describe("Display Pins", function() {
    it("Map loads without error and pin elements present", function() {
        expect(login.displayMapAndPins_t()).to.be.a("number");
    });
});

});




//contact.js
describe(divider+'   Test File - contact.js'+divider, function(){
// function submitContactForm()->clearFields->displaySuccess
// 2 cases success or error


// function displaySuccess()
describe("Display Messeage Test", function() {
    it("Should display message was submitted successfully", function() {
        expect(contacts.displaySuccess_t()).to.be.a("number");
    });
});

// function clearFields()
describe("Clear Fields Test", function() {
    it("Should result in message form fields being cleared", function() {
        expect(contacts.clearFields_t()).to.be.a("number");
    });
});
});




// adminpanel.js
describe(divider+'   Test File - adminpanel.js'+divider, function(){
// function getPins -> renderPinTable or refreshPinTable
describe("Get Pin Render Pin Table Test", function() {
    it("Should render pin table", function() {
        expect(adminpanel.getPins_t(0)).to.be.a("number");
    });
});
describe("Get Pin Refresh Table", function() {
    it("Should refresh Pin Table", function() {
        expect(adminpanel.getPins_t(1)).to.be.a("number");
    });
});


// function createPinInfoSection -> addDataRowToContainer & addDeleteBtn

// function addDeleteBtn
describe("Delete Button Test", function() {
    it("Should display a delete button", function() {
        expect(adminpanel.addDeleteBtn_t()).to.be.a("number");
    });
});
// function addDataRowToContainer
describe("Add Data to Pin Table", function() {
    it("Should add a row to the pin table", function() {
        expect(adminpanel.addDataRowToContainer_t()).to.be.a("number");
    });
});

// function setRowListeners -> createPinInfoSection


// function refreshPinTable - > setRowListeners

// function renderPinTable -> setRowListeners -> createdRow -> renderHTMLDataset


// function renderHTMLDataset
describe("HTML Renders Dataset Test", function() {
    it("HTML renders without error", function() {
        expect(adminpanel.renderHTMLDataset_t()).to.be.a("number");
    });
});

});

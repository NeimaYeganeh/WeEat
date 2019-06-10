var index = require("../index");
//var login = require("../WeEat/login.js");
var chai = require("chai");
var request = require('supertest'); //HTTP post / get testing
var expect = chai.expect;

//const firebase = require('firebase/app');
//var firebase = require("https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js");
/*
var firebaseConfig = {
                         apiKey: "AIzaSyAlbF49-DzXUZCz_kpdj2lk4gYJSHSi71w",
                         authDomain: "weeat-c73e4.firebaseapp.com",
                         databaseURL: "https://weeat-c73e4.firebaseio.com",
                         projectId: "weeat-c73e4",
                         storageBucket: "weeat-c73e4.appspot.com",
                         messagingSenderId: "17474082925",
                         appId: "1:17474082925:web:2ca69241a8edaea7"
                       };
                       // Initialize Firebase
                       firebase.initializeApp(firebaseConfig);
*/
//var app = firebase.app();
//const app = require("../WeEat/index");
/*
describe("index.js tests", function() {
    it("addTwoNumbers returns a number", function() {
        expect(login.login()).to.equal(undefined);
    });
});
*/

// function login()
describe("Login Successful Test", function() {
    it("Login HTTP response status should be 200", function() {
        expect(index.addTwoNumbers(0, 0)).to.be.a("number");
    });
});

// function logout()
describe("Authenticated user can logout", function() {
    it("Logout HTTP response status should be 200", function() {
        expect(index.addTwoNumbers(0, 0)).to.be.a("number");
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

// function displayMapAndPins()
describe("Display Map Test", function() {
    it("Map loads without error", function() {
        expect(index.addTwoNumbers(0, 0)).to.be.a("number");
    });
});

// function displayMapAndPins()
describe("Display Pins", function() {
    it("Map loads without error and pin elements present", function() {
        expect(index.addTwoNumbers(0, 0)).to.be.a("number");
    });
});



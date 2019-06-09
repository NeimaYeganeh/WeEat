var index = require("../index");
var chai = require("chai");
var request = require('supertest'); //HTTP post / get testing
var expect = chai.expect;
//import * as firebase from 'firebase/app';

const firebase = require('firebase/app');
//var firebase = require("https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js");

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

var app = firebase.app();

// function login()
// function logout()
// function addNewPin()
// function displayMapAndPins()




/*
//let's set up the data we need to pass to the login method
const userCredentials = {
  email: 'jmkrone@calpoly.edu', 
  password: 'firebase'
}
//now let's login the user before we run any tests
var authenticatedUser = request.agent(app);
before(function(done){
  authenticatedUser
    .post('/login')
    .send(userCredentials)
    .end(function(err, response){
      expect(response.statusCode).to.equal(200);
      expect('Location', '/home');
      done();
    });
});
//this test says: make a POST to the /login route with the email: sponge@bob.com, password: garyTheSnail
//after the POST has completed, make sure the status code is 200 
//also make sure that the user has been directed to the /home page
*/
describe('Todos list API Integration Tests', function() {
  describe('#GET / index', function() { 
    it('should get all index', function(done) { 
      request(app) .get('/index')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          done(); 
        }); 
    });
  });
});




describe("index.js tests", function() {
    it("addTwoNumbers returns a number", function() {
        expect(index.addTwoNumbers(0, 0)).to.be.a("number");
    });
});

describe("login should return", function() {
    it("addTwoNumbers returns a number", function() {
        expect(index.addTwoNumbers(0, 0)).to.be.a("number");
    });
});

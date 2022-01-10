// const assert = require("assert") => default nodejs library

const assert = require("chai").assert;
// const app = require("../index");

// describe("App", function () {
//   it("app should return hello", function () {
//     assert.equal(app(), "Hello");
//   });
// });

// for multiple functions
// const sayHello = require("../index").sayHello;
// const addNumbers = require("../index").addNumbers;
// describe("App", function () {
//   it("app should return hello", function () {
//     // assert.equal(sayHello(), "Hello");
//     let result = sayHello();
//     assert.equal(result, "Hello");
//   });
//   it("say hello should return type string", function () {
//     let result = sayHello();
//     assert.typeOf(result, "string");
//   });
//   it("add numbers should be above 5", function () {
//     let res = addNumbers(5, 10);
//     assert.isAbove(res, 5);
//   });
//   it("addNumbers  should return type number", function () {
//     let result = addNumbers(5,5);
//     assert.typeOf(result, "number");
//   });
// });
// ---------------------------------------------------------------------
// const app = require("../index");
// describe("App", function () {
//   it("app should return hello", function () {
//     // assert.equal(sayHello(), "Hello");
//     let result = app.sayHello();
//     assert.equal(result, "Hello");
//   });
//   it("say hello should return type string", function () {
//     let result = app.sayHello();
//     assert.typeOf(result, "string");
//   });
//   it("add numbers should be above 5", function () {
//     let res = app.addNumbers(5, 10);
//     assert.isAbove(res, 5);
//   });
//   it("addNumbers  should return type number", function () {
//     let result = app.addNumbers(5,5);
//     assert.typeOf(result, "number");
//   });
// });
// ----------------------------------------------------------------------------
// const app = require("../index");
// sayHelloResult = app.sayHello();
// addNumbersResult = app.addNumbers(10, 1);
// describe("App", function () {
//   it("app should return hello", function () {
//     // assert.equal(sayHello(), "Hello");
//     // let result = app.sayHello();
//     assert.equal(sayHelloResult, "Hello");
//   });
//   it("say hello should return type string", function () {
//     // let result = app.sayHello();
//     assert.typeOf(sayHelloResult, "string");
//   });
//   it("add numbers should be above 5", function () {
//     // let res = app.addNumbers(5, 10);
//     assert.isAbove(addNumbersResult, 5);
//   });
//   it("addNumbers  should return type number", function () {
//     // let result = app.addNumbers(5,5);
//     assert.typeOf(addNumbersResult, "number");
//   });
// });
// --------------------------------------------------------------------
const app = require("../index");
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(10, 1);
describe("App", function () {
  describe("sayHello()", function () {
    it("app should return hello", function () {
      assert.equal(sayHelloResult, "Hello");
    });
    it("say hello should return type string", function () {
      assert.typeOf(sayHelloResult, "string");
    });
  });
  describe("addNumbers()", function () {
    it("add numbers should be above 5", function () {
      assert.isAbove(addNumbersResult, 5);
    });
    it("addNumbers  should return type number", function () {
      assert.typeOf(addNumbersResult, "number");
    });
  });
});

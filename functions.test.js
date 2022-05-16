const {returnTwo, greeting, add} = require('./functions.js');

let testData = {
    name: "James",
    num1: 5,
    num2: 4
}

test("check to see if returnTwo gives back value of 2", () => {
    expect(returnTwo()).toBe(2);
  })

test("check to see if greeting gives correct response", () => {
    expect(greeting(testData.name)).toBe("Hello, James")
  })

test("check to see if add gives the correct sum of two numbers", () => {
    expect(add(testData.num1, testData.num2)).toEqual(9)
})
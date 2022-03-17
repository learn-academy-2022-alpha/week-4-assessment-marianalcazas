// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

 describe('removesFirstItem', () => {

   it('takes in an array, removes the first item from the array and shuffles the remaining content', () => {

    const colors1 = ["purple", "blue", "green", "yellow", "pink"]

 // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

 const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

 // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

     expect(removesFirstItem(colors1)).toEqual(expect.arrayContaining( ["yellow", "blue", "pink", "green"])); 

     expect(removesFirstItem(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
     });
   });

 //=======GooDFailure==========

// removesFirstItem › takes in an array, removes the first item from the array and shuffles the remaining content

// ReferenceError: removesFirstItem is not defined


// b) Create the function that makes the test pass.

//pseudocode
//create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
//function name removesFirstItem
// I will use .shift built in method to remove the first element from the array
//then I will use .sort method to change the positions of the ements.
//and for last I will use the Math.random to create a random sorted. 


const removesFirstItem = (array) => {
    array.shift()
      return array.sort(() => Math.random() - 0.5)
      }
   

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.


  describe("arrayOfNumbers", () => {

     it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
  
 const nums1 = [3, 56, 90, -8, 0, 23, 6]
//  Expected output: [-8, 90]
 const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]
    
      expect(arrayOfNumbers(nums1)).toEqual([-8, 90 ])
      expect(arrayOfNumbers(nums2)).toEqual([5, 109])
     })
  })


 //=======GooDFailure==========

//arrayOfNumbers › takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
// ReferenceError: arrayOfNumbers is not defined


// b) Create the function that makes the test pass.
//pseudocode
// Create a function named arrayOfNumbers
// the function will take an array of numbers and returns an array of the minimum and maximum numbers in that order.
//create two variables that will hold the min value and the max.
//Use .Math.min to select and return the lowest value in the array
//Use .Math.max to select and return the highest value in the array

const arrayOfNumbers = (array) => {
    let minimum = Math.min(...array)
    let maximum = Math.max(...array)
    return [minimum,maximum]
  }



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
      describe("takesTwoArr", () => {   

      it("takes in two arrays as arguments and returns one array with no duplicate values. Use the spread operator to pass in a dynamic number of arguments.", () => {
  
      const testArray1 = [3, 7, 10, 5, 4, 3, 3]
      const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    //  Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    
      expect(takesTwoArr(testArray1,testArray2)).toEqual(expect.arrayContaining([3, 7, 10, 5, 4, 8, 2, 1 ]))
    })

      //=======GooDFailure==========
    // takes in two arrays as arguments and returns one array with no duplicate values. Use the spread operator to pass in a dynamic number of arguments.

    // ReferenceError: twoArraysAsArguments is not defined

    // b) Create the function that makes the test pass.
    //pseudoCode
    //create a function that takes in two arrays as arguments and returns one array with no duplicate values.
    // function takesTwoArr
    //create two variables:
    //variable1 "arrConcat" will take the two parameters arr1 and arr2 and concat
    //variable2 "duplicateValues" will use new set to store the unique values to return to the array

     const takesTwoArr = (arr1,arr2) => {
         let arrConcat = arr1.concat(arr2)
         let duplicateValues = [...new Set(arrConcat)]
         return duplicateValues
    }
})

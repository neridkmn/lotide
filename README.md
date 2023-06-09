# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @neridkmn/lotide`

**Require it:**

`const _ = require('@neridkmn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Print if the given arrays are equal by checking with eqArrays function.
* `assertEqual(param1, param2)`: Make an assertion if the given arguments are strictly equal and print the result to the console. 
* `assertObjectsEqual(obj1, obj2)`: Make an assertion if the given arguments are strictly equal and print the result to the console by checking with eqObjects function. 
* `countLetters(argument)`: Counts the number of letters and add 1 if it's already defined within the given arg and returns an object.
* `countOnly(arg1, arg2)`: Specifying what to count from the given arg and returns an obj.
* `eqArrays(arr1, arr2)`: Checks if the given arguments are strictly equal.
* `eqObjects(obj1, obj2)`: Checks if the given arguments are strictly equal by using eqArrays function.
* `findKey(obj, callback)`: Finding the key value of the given obj by using the callback function.
* `findKeyByValue(obj, value)`: Checks if the given value is placed within the given obj or not.
* `flatten(arr)`: Loop over the elements and if they're nested arrays, it carries out the first level of the nested array. 
* `head(arr)`: Returns the first element, index[0] of the given array. 
* `letterPositions(str)`: Finds the indices of an element of the argument. 
* `map(arr, callback)`: Loops over an array and applies the callback to each item. 
* `middle(arr)`: Returns the middle element/s of the given array. 
* `tail(arr)`: Returns the array without the first element. 
* `takeUntil(arr, callback)`: Loops over the array and returns the elements that pass the rule defined in the callback function. 
* `without(arr1, arr2)`: Removes the elements of arr2 from arr1 and returns arr1.

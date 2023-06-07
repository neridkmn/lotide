const assertEqual = require('../assertEqual');

const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const word = ["Yo Yo"];
tail(word); // no need to capture the return value since we are not checking it
assertEqual(tail(word).length, 0); // original array should still have 0 elements!

const emptyArr = [];
assertEqual(tail(emptyArr).length, 0);
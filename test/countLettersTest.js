const countLetters = require('../countLetters');

const assertEqual = require('../assertEqual');


const result1 = countLetters("Today is Tuesday");
assertEqual(result1["t"], 2);
assertEqual(result1["c"], undefined);
assertEqual(result1["u"], 1);
assertEqual(result1[" "], undefined);

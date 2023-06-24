// Which Generation Are You?
const generation = (x, y) => {
  if (x < -3 || (x > 3 && y !== "m") || y !== "f") {
    throw new Error("Wrong input!");
  }

  // Object mapping generation titles
  const result = {
    "-3": { m: "great grandfather", f: "great grandmother" },
    "-2": { m: "grandfather", f: "grandmother" },
    "-1": { m: "father", f: "mother" },
    0: { m: "me!", f: "me!" },
    1: { m: "son", f: "daughter" },
    2: { m: "grandson", f: "granddaughter" },
    3: { m: "great grandson", f: "great granddaughter" },
  };

  return result[x][y];
};

const output = generation(-3, "f");

console.log(output);

// - - - - - - - - - -

// Remove Trailing and Leading Zeros
const removeLeadingTrailing = (n) => {
  console.log(parseFloat(n));
}

removeLeadingTrailing("230.000"); // ➞ "230"

removeLeadingTrailing("00402"); // ➞ "402"

removeLeadingTrailing("03.1400"); // ➞ "3.14"

removeLeadingTrailing("30"); // ➞ "30"

// - - - - - - - - - -

// Get the Area of a Country
const areaOfCountry = (name, area) => {
  const total_worlds_andmass = 148940000;
  const result = ((area / total_worlds_andmass) * 100).toFixed(2);

  console.log(`${name} is ${result} of the world's landmass.`);
}

areaOfCountry("Russia", 17098242); // ➞ "Russia is 11.48% of the total world's landmass"

areaOfCountry("USA", 9372610); // ➞ "USA is 6.29% of the total world's landmass"

areaOfCountry("Iran", 1648195); // ➞ "Iran is 1.11% of the world's landmass"

// - - - - - - - - - -

// Reverse Words in a String
const reverseWords = (string) => {
  let words = string.split(" ");
  let trimmedWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      trimmedWords.push(words[i]);
    }
  }

  console.log(trimmedWords.join(" "));
}

reverseWords(" the sky is blue"); // ➞ "blue is sky the"

reverseWords("hello   world!  "); // ➞ "world! hello"

reverseWords("a good example"); // ➞ "example good a"

// - - - - - - - - - -

// Hitting the Jackpot
const testJackpot = (result) => {
  const res = result.every((x) => x === result[0]);
  console.log(res);
}

testJackpot(["@", "@", "@", "@"]); //➞ true

testJackpot(["abc", "abc", "abc", "abc"]); //➞ true

testJackpot(["SS", "SS", "SS", "SS"]); //➞ true

testJackpot(["&&", "&", "&&&", "&&&&"]); //➞ false

testJackpot(["SS", "SS", "SS", "Ss"]); //➞ false

// - - - - - - - - - -

// Finding Nemo
const findNemo = (sentence) => {
  if (sentence.includes("Nemo")) {
    const madeArr = sentence.split(" ");
    const indexOfNemo = madeArr.indexOf("Nemo");
    console.log(`I found Nemo at ${indexOfNemo + 1}`);
  } else {
    console.log("I could not find Nemo :(");
  }
}

findNemo("I am finding Nemo !"); //➞ "I found Nemo at 4!"

findNemo("Nemo is me"); //➞ "I found Nemo at 1!"

findNemo("I Nemo am"); //➞ "I found Nemo at 2!"

// - - - - - - - - - -

// Move Capital Letters to the Front
// 1st way
const capToFront = (s) => {
  const regex = /[A-Z]/g;
  if (s.match(regex)) {
    const rest = [];
    const result = s.split("").filter((a) => {
      if (a.match(regex)) {
        return a;
      } else {
        rest.push(a);
      }
    });
    console.log(result.concat(rest).join(""));
  } else {
    console.log(s);
  }
}

capToFront("hApPy"); // ➞ "APhpy"

capToFront("moveMENT"); // ➞ "MENTmove"

capToFront("shOrtCAKE"); // ➞ "OCAKEshrt"

// 2nd BETTER WAY
const capToFront2 = (s) => {
  const capitalLetters = s.split("").filter((a) => a === a.toUpperCase());
  const lowercaseLetters = s.split("").filter((a) => a === a.toLowerCase());
  console.log(capitalLetters.concat(lowercaseLetters).join(""));
}

capToFront2("hApPy"); // ➞ "APhpy"

capToFront2("moveMENT"); // ➞ "MENTmove"

capToFront2("shOrtCAKE"); // ➞ "OCAKEshrt"

// - - - - - - - - - -

// Match the Last Item
const matchLastItem = (arr) => {
  const lastEl = arr.pop();
  console.log(arr.join("") === lastEl);
}

matchLastItem(["rsq", "6hi", "g", "rsq6hig"]); //➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]); //➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]); //➞ true

// - - - - - - - - -

// The DECIMATOR
const DECIMATOR = (str) => {
  const theLength = str.length;
  const numOfRemove = Math.ceil(theLength / 10);
  charArr = str.split("");

  charArr.splice(theLength - numOfRemove, numOfRemove);
  console.log(charArr.join(""));
}

DECIMATOR("1234567890"); //➞ "123456789"
// 10 characters, removed 1.

DECIMATOR("1234567890AB"); //➞ "1234567890"
// 12 characters, removed 2.

DECIMATOR("123"); //➞ "12"
// 3 characters, removed 1.

DECIMATOR("123456789012345678901"); //➞ "123456789012345678"
// 21 characters, removed 3.

// - - - - - - - - - -

// Remove Duplicates from an Array
const removeDups = (arr) => {
  const res = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  console.log(res);
}

removeDups([1, 0, 1, 0]); //➞ [1, 0]

removeDups(["The", "big", "cat"]); //➞ ["The", "big", "cat"]

removeDups(["John", "Taylor", "John"]); //➞ ["John", "Taylor"]

// - - - - - - - - - -
// ReverseAndNot
const reverseAndNot = (i) => {
  const reversed = i.toString().split("").reverse().join("");
  const result = reversed.concat(i);
  console.log(result);
}

reverseAndNot(123); // ➞ 321123

reverseAndNot(152); // ➞ 251152

reverseAndNot(123456789); // ➞ 987654321123456789

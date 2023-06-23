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



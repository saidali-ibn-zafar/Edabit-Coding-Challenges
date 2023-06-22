// QUESTION NAME: Which Generation Are You?
// Try finding your ancestors and offspring with code.

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

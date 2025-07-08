const country = "Turkey";
const continent = "Europe";
let population = 85.0;

const isIsland = false;
const language = "Turkish";

const description = `${country} is in ${continent} and its ${population} million people speak ${language}.`;
console.log(description);

if (population > 33) {
  console.log(
    `${country}'s population is ${population - 33} million abow average`
  );
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

const numNeighbours = Number(
  prompt(`How many neighbour countries does your country have?`)
);
if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border!`);
} else {
  console.log(`No borders!`);
}

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

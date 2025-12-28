let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let count = 0;
storyWords.forEach((word) => count++);
console.log(count);

// Step 6: Remove the unnecessary word "literally"
let unnecessaryWord = "literally";
storyWords = storyWords.filter((word) => word !== unnecessaryWord);
console.log(storyWords.join(" "));

// Step 7: Correct the misspelled word
let misspelledWord = "beautifull"; // assuming this is the misspelled version
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful";
  } else {
    return word;
  }
});
console.log(storyWords.join(" "));

// Step 8: Find the bad word index
let badWord = "bad";
let badWordIndex = storyWords.findIndex((word) => word === badWord);
console.log(badWordIndex);

// Step 9: Replace the bad word with 'really' (if found)
if (badWordIndex !== -1) {
  storyWords[badWordIndex] = "really";
}
console.log(storyWords.join(" "));

// Step 10: Check that every word has ≤ 10 characters
let lengthCheck = storyWords.every((word) => word.length <= 10);
console.log(lengthCheck); // Expect false — some words exceed 10 characters

// Step 11: Find and replace any long words
let longWord = storyWords.find((word) => word.length > 10);
console.log("Long word found:", longWord);

if (longWord) {
  storyWords = storyWords.map((word) => {
    if (word === longWord) {
      return "stunning"; // replacement suggestion
    } else {
      return word;
    }
  });
}

console.log(storyWords.join(" "));

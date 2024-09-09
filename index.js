function analyzeSentence(sentence) {
  let lengthCounter = 0;
  let wordCounter = 1; // Start at 1 since the last word doesn't follow a space
  let vowelCounter = 0;

  const vowels = "aeiouAEIOU";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Increment lengthCounter for each character
    lengthCounter++;

    // Increment wordCounter when encountering a space
    if (char === " " && i !== sentence.length - 1) {
      wordCounter++;
    }

    // Increment vowelCounter when encountering a vowel
    if (vowels.includes(char)) {
      vowelCounter++;
    }
  }

  // Subtract 1 from lengthCounter to exclude the final period
  lengthCounter--;

  document.getElementById(
    "length"
  ).textContent = `Length of the sentence: ${lengthCounter}`;
  document.getElementById(
    "words"
  ).textContent = `Number of words: ${wordCounter}`;
  document.getElementById(
    "vowels"
  ).textContent = `Number of vowels: ${vowelCounter}`;
}

document.getElementById("analyzeButton").addEventListener("click", function () {
  const sentence = document.getElementById("sentenceInput").value;
  if (sentence.endsWith(".")) {
    analyzeSentence(sentence);
  } else {
    alert("Please end your sentence with a period.");
  }
});

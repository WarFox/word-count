import { MULTISPACE_REGEX, ALPHABETS_REGEX, NUMBERS_REGEX } from "../constants";

const defaultState = {
  wordCount: 0,
  totalChars: 0,
  charCount: 0,
  charCountNoSpace: 0,
  alphabetsCount: 0,
  numbersCount: 0,
  nonAlphaNumeric: 0,
  averageWordLength: 0
};

const wordsList = text => {
  return text.length === 0
    ? []
    : text.replace(MULTISPACE_REGEX, " ").split(" ");
};

const chartData = words => {
  return words === undefined
    ? []
    : words.map(x => Object.assign({}, { word: x, length: x.length }));
};

const calculations = text => {
  const trimmedText = text.trim();
  const alphabets = trimmedText.match(ALPHABETS_REGEX);
  const numbers = trimmedText.match(NUMBERS_REGEX);
  const nonAlphaNumerics = trimmedText.match(/\W/gi);
  const words = wordsList(trimmedText);

  return {
    text,
    words,
    wordCount: words.length,
    totalChars: text.length,
    charCount: trimmedText.length,
    charCountNoSpace: trimmedText.replace(MULTISPACE_REGEX, "").length,
    alphabetsCount: alphabets === null ? 0 : alphabets.length,
    numbersCount: numbers === null ? 0 : numbers.length,
    alphabets,
    numbers,
    nonAlphaNumeric: nonAlphaNumerics == null ? 0 : nonAlphaNumerics.length,
    chartData: chartData(words)
  };
};

const counts = (state = defaultState, action) => {
  switch (action.type) {
    case "REFRESH_COUNT":
      const { text } = action;

      return Object.assign({}, state, calculations(text));
    default:
      return state;
  }
};

export default counts;

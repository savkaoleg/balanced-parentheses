const pairs = {
  "{": "}",
  "[": "]",
  "(": ")",
};

const closeParentheses = Object.values(pairs);

const check = (str) => {
  const resArr = [];

  for (const char of str) {
    if (pairs[char]) {
      // open parenthese
      resArr.push(char);
    } else if (closeParentheses.includes(char)) {
      // close parenthese
      const prevPossibleOpened = pairs[resArr.pop()];
      if (prevPossibleOpened !== char) {
        return false;
      }
    }
  }

  return resArr.length === 0;
};

export { check };

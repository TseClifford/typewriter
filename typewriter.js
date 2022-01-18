const sentence = "hello there from lighthouse labs";

const animatedStr = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (i === string.length - 1) {
      setTimeout(() => {
        process.stdout.write(`${string[i]}\n`);
      }, i * 50);
    } else {
      setTimeout(() => {
        process.stdout.write(`${string[i]}`);
      }, i * 50);
    }
  }
};

animatedStr(sentence);
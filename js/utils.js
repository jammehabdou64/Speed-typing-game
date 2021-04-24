class Ui {
  // time;
  constructor(time) {
    this.time = time;
  }

  select(element) {
    return document.querySelector(element);
  }

  displayTime() {
    const stopInt = setInterval(() => {
      console.log(this.time--);
      this.select(".time").textContent = ` ${this.time - 1}`;
      if (this.time <= 0) {
        this.select(".time").textContent = ` ${0}`;
        return clearInterval(stopInt);
      }
    }, 1000);
  }

  displayrandomText() {
    const text = [
      "played",
      "game",
      "zebra",
      "playing",
      "football",
      "watching",
      "cooking",
      "match",
      "laughing",
      "crying",
      "fighting",
      "market",
      "shops",
    ];
    if (this.checkQuestionAnswered()) {
      return this.checkQuestionAnswered();
    }
    if (this.checkTime()) {
      return this.checkTime();
    }

    return (this.select(".card-body > p").textContent = `${
      text[Math.floor(Math.random() * (text.length - 1))]
    }`);
  }

  checkTime() {
    let bool = null;
    let stopInt = setInterval(() => {
      if (this.select(".time").textContent <= 0) {
        this.select(".card-body > p").textContent = `You score ${
          this.select(".score").textContent
        }`;
        bool = true;
        return clearInterval(stopInt);
      }
      bool = false;
    }, 1000);
    return bool;
  }

  checkQuestionAnswered() {
    let bool = null;
    let stopInt = setInterval(() => {
      if (this.select(".question-num").textContent >= 10) {
        this.select(".time").textContent = 0;
        this.select(".card-body > p").textContent = `You score ${
          this.select(".score").textContent
        }`;
        bool = true;
        return clearInterval(stopInt);
      }
      bool = false;
    }, 1000);
    return bool;
  }

  checkUserAnswer() {
    let questionNum = this.select(".question-num");

    let score = this.select(".score");
    let userInput = this.select("input").value;
    let givingWord = this.select(".card-body > p").textContent;

    if (userInput == givingWord) {
      questionNum.textContent = Number(questionNum.textContent) + 1;

      this.time += 4;

      score.textContent = Number(score.textContent) + 10;
      this.select("input").value = "";
      return this.displayrandomText();
    }
  }
}

const ui = new Ui(10);

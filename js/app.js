let startBtn = ui.select(".card-body > p > button");
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  ui.displayTime();
  ui.displayrandomText();
});

ui.select("input").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    ui.checkUserAnswer();
  }

  //   console.log(e.key);
});

// Azer's web project

// Counting Variables
let numCorrect = 0;
// Button Event Listner
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let question1 = +document.getElementById("question-in").value.toLowerCase();
  let question2 = document.getElementById("question-in").value.toLowerCase();
  let question3 = document.getElementById("question-in").value.toLowerCase();
  let question4 = document.getElementById("question-in").value.toLowerCase();
  let res1 = 0;
  let res2 = 0;
  let res3 = 0;
  let res4 = 0;
  // If statements
  if (question1 === 2011) {
  }
  // Feedback code
  if (question1 === 2011) {
    document.getElementById("feedback1").innerHTML = "Correct!";
    output.innerHTML = "correct";
    numCorrect++;
  } else {
    // console.log("first wrong");
    res1 = 1;
    document.getElementById("feedback1").innerHTML =
      "Minecraft's was fully released in 2011";
  }

  if (question2 === "creepers") {
    document.getElementById("feedback2").innerHTML = "Correct!";
    output.innerHTML = "correct";
    numCorrect++;
  } else {
    res2 = 1;
    document.getElementById("feedback2").innerHTML =
      "Creepers run away from Ocelots when they are near them";
  }

  if (question3 === "cave game") {
    document.getElementById("feedback3").innerHTML = "Correct!";
    output.innerHTML = "correct";
    numCorrect++;
  } else {
    res3 = 1;
    document.getElementById("feedback3").innerHTML =
      "Before it was called Minecraft the creators names it Cave Game";
  }

  if (question4 === "ender dragon egg" || question4 === "exp points") {
    doucument.getElementById("feedback4").innerHTML = "Correct!";
    output.innerHTML = "correct";
    numCorrect++;
  } else {
    res = 1;
    document.getElementById("feedback4").innerHTML =
      "The Ender Dragon once killed drops an egg and exp points";
  }
}

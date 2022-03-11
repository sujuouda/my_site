console.log("working")

const workSize = document.querySelectorAll(".work").length
workList = document.querySelectorAll(".work");
descList = document.querySelectorAll(".panel");
initializeJobs();

function initializeJobs() {
  for (var i = 1; i < workSize; i++) {
    workList[i].classList.add("pressed");
    descList[i].hidden = true;
  }
}

for (var i = 0; i < workSize; i++) {
  document.querySelectorAll(".work")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    displayJob(buttonInnerHTML);
  });
}

function displayJob(currentKey) {
  currentKey = currentKey.toLowerCase();
  var activeButton = document.querySelector("." + currentKey);

  for (var i = 0; i < workSize; i++) {
    if (workList[i] == activeButton) {
      activeButton.classList.remove("pressed");
      descList[i].hidden = false;
    } else {
      workList[i].classList.add("pressed");
      descList[i].hidden = true;
    }
  }
}

// alert("Working")
console.log("working")

const workSize = document.querySelectorAll(".work").length

for (var i = 0; i < workSize; i++) {
  document.querySelectorAll(".work")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    displayJob(buttonInnerHTML);
  });
}

function displayJob(currentKey) {
  currentKey = currentKey.toLowerCase();
  var activeButton = document.querySelector("." + currentKey);
  workList = document.querySelectorAll(".work")
  descList = document.querySelectorAll(".panel")

  for (const work of workList){
    if (work == activeButton) {
      activeButton.classList.remove("pressed");
    } else {
      work.classList.add("pressed");
    }
  }
}

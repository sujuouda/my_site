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
  console.log(currentKey)
  currentKey = currentKey.toLowerCase();
  var activeButton = document.querySelector("." + currentKey);
  console.log(activeButton)

}

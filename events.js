const container = document.querySelector(".container");
const innerContainer = document.querySelector(".inner-container");
const article = document.querySelector(".article");
const events = document.querySelector(".events");
const delegation = document.querySelector(".delegation");

function handleEvent(event) {
  console.log(event.type);
}

events.addEventListener("mouseover", handleEvent);
events.addEventListener("mouseout", handleEvent);
events.addEventListener("contextmenu", handleEvent);
events.addEventListener("mousedown", handleEvent);
events.addEventListener("mouseup", handleEvent);

container.addEventListener("click", () => {
  console.log("Capturing from green box to next");
}, true);

innerContainer.addEventListener("click", () => {
  console.log("Capturing from orange box to next");
}, true);

article.addEventListener("click", () => {
  console.log("Capturing from article to next");
}, true);

container.addEventListener("click", () => {
  console.log("You clicked on green box, bubbling")
})

innerContainer.addEventListener("click", () => {
  console.log("You clicked on orange box, bubbling");
});

article.addEventListener("click", () => {
  console.log("You clicked on article, bubbling");
  // event.stopPropagation();
});

delegation.addEventListener("click", event => {
  switch(event.target.textContent) {
    case "save": console.log("Saving..."); break;
    case "load": console.log("Loading..."); break;
    case "reset": console.log("Reseting..."); break;
    default: console.log("Misclick"); break;
  }
});

document.querySelectorAll("input")[1].addEventListener("click", event => {
  // event.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
});

window.addEventListener("load", () => {
  console.log("Load");
});

window.onbeforeunload = function() {
  return false;
};
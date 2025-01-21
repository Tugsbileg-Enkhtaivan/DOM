const titleElRef = document.getElementsByTagName("h1");
console.log(titleElRef[1]);
document.getElementsByTagName("h1")[0].innerText = "Hello world";
document.getElementsByTagName("h1")[0].style.color = "purple";

const jsTitleElRef = document.getElementById("js");
console.log(jsTitleElRef);

jsTitleElRef.innerText = "Js title";

const createElementElRef = document.createElement("h1");
createElementElRef.innerText = "this h1";
document.body.appendChild(createElementElRef);

jsTitleElRef.remove();

const h1ElRefs = document.getElementsByTagName("h1");
for (let i = 0; i < h1ElRefs.length; i++) {
  h1ElRefs[i].remove();
}

// function that get atr
function getNumber(n) {
  for (let i = 1; i <= n; i++) {
    const ballElRef = document.createElement("div");
    ballElRef.innerText = i;
    ballElRef.style.height = 100 + "px";
    ballElRef.style.width = 100 + "px";
    ballElRef.style.borderRadius = 50 + "%";
    ballElRef.style.backgroundColor = "purple";
    ballElRef.style.alignContent = "center";
    ballElRef.style.textAlign = "center";
    document.body.appendChild(ballElRef);
  }
}
// const bodybox = document.getElementsByTagName("body");
// bodybox[0].style.display = "flex";
// bodybox[0].style.flexDirection = "column";
// bodybox[0].style.justifyContent = "center";
// bodybox[0].style.alignItems = "center";
// bodybox[0].style.boxSizing = "border-box";
// bodybox[0].style.margin = "0";
// bodybox[0].style.padding = "0";
// bodybox[0].style.scrollBehavior = "smoooth";

// getNumber(100);

const Button = document.getElementsByTagName("button")[0];
Button.addEventListener("click", function changeBackground() {
  document.body.style.backgroundColor = rgbColor();
});

function randomColor() {
  return Math.floor(Math.random() * 256);
}
function rgbColor() {
  return `rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}
console.log(typeof rgbColor());

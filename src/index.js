let measure = document.getElementById("measureSelect");
let volume = document.getElementById("input");
let answer = document.getElementById("result");
let convertClick = document.getElementById("convert");

function liquidConvert() {
  if (measure.value === "oz") {
    let output = `${(volume.value * 29.57).toFixed(2)} ml`;
    answer.firstChild.nodeValue = output;
  } else if (measure.value === "ml") {
    let output = `${(volume.value / 29.57).toFixed(2)} oz`;
    answer.firstChild.nodeValue = output;
  } else {
    let output = "something went wrong";
    answer.firstChild.nodeValue = output;
  }
}

convertClick.addEventListener("click", liquidConvert, false);

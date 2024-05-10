
  function alertHelloWorld() {

    alert("Hello, world!");

  }
  
  function biggerText() { 

    var txtBoxInput = document.getElementById("textBoxInput");
    txtBoxInput.style.fontSize = "24pt";

  }

  function applyStyle() {

    var txtBox = document.getElementById("textBoxInput");
    var fancyTxt = document.getElementById("fancyshmancy").checked;

    if (fancyTxt) {

        txtBox.style.fontWeight = "bold";
        txtBox.style.color = "blue";
        txtBox.style.textDecoration = "underline";

    } else {

        txtBox.style.fontWeight = "normal";
        txtBox.style.color = "black";
        txtBox.style.textDecoration = "none";

    }
}

function moo() {
  
  var txtBox = document.getElementById("textBoxInput");
  var split = txtBox.value.split(".");
  txtBox.value = split.join(". -Moo");
  txtBox.value = txtBox.value.toUpperCase();

}

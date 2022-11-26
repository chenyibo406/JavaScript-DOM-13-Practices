//First create a list of all bold items

var bold_Items = document.querySelectorAll("strong");
function highlight() {
  for (var i = 0; i < bold_Items.length; i++) {
    bold_Items[i].style.color = "red";
  }
}

// On mouse out highlighted words become black
function return_normal() {
  for (var i = 0; i < bold_Items.length; i++) {
    bold_Items[i].style.color = "black";
  }
}

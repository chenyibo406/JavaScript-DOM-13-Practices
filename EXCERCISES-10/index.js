function calculate() {
  var radius = document.getElementById("radius").value;
  var result = (4 / 3) * Math.PI * radius ** 3;
  document.getElementById("volume").value = result;
}

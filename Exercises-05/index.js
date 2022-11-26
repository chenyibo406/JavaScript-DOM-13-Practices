function insert_Row() {
  var x = document.getElementById("sampleTable").insertRow(0);
  var y = x.insertCell(0);
  var z = x.insertCell(1);
  //   var another_row = x.insertCell(3);
  y.innerHTML = "New Cell1";
  z.innerHTML = "New Cell2";
  //   another_row.innerHTML = "New Cell3";
}

function sayHello() {
  alert("hello");
  var first, second;
  first = document.getElementById("firstname").value;
  second = document.getElementById("lastname").value;
  document.getElementById("fullName").innerHTML = first + second;
}

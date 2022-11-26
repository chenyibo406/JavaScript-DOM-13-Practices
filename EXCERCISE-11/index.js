function display_random_image() {
  var IMAGE = [
    {
      src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
      width: "240",
      height: "160",
    },
    {
      src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
      width: "320",
      height: "195",
    },
    {
      src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
      width: "500",
      height: "343",
    },
  ];

  var index = Math.floor(Math.random() * IMAGE.length);
  console.log(index);

  SRC = IMAGE[index].src;
  WIDTH = IMAGE[index].width;
  HEIGHT = IMAGE[index].height;

  const new_element = document.createElement("img");
  new_element.setAttribute("src", SRC);
  new_element.setAttribute("id", "img");
  new_element.style.width = WIDTH;
  new_element.style.height = HEIGHT;

  const prev_element = document.getElementById("img");
  console.log(prev_element);
  prev_element.replaceWith(new_element);
}

var body = document.getElementsByTagName('body')[0];

for (var i = 0; i < 63; i++) {

  var div = document.createElement('div');

  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";

  var red = (Math.floor(Math.random() * 256));
  var green = (Math.floor(Math.random() * 256));
  var blue = (Math.floor(Math.random() * 256));

  div.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
  body.appendChild(div);
}

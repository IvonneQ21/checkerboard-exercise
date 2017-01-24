var body = document.getElementsByTagName('body')[0];

for (var i = 0; i < 63; i++) {
  var div = document.createElement('div');
  // * Each tile should be a `div`
  div.style.float = 'left';
  // * Set each tile's `float` property to `left`
  div.style.width = '11.1%';
    // * Each tile's width is `11.1%`
  div.style.paddingBottom = '11.1%';
// * Each tile's paddingBottom is `11.1%`
  if (i % 2 === 0) {
    div.style.backgroundColor = 'red';
  } else {
    div.style.backgroundColor = 'black';
  }

  body.appendChild(div);
  // attached this to the body of my HTML. 
}

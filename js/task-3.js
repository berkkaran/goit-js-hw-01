function getElementWidth(content, padding, border) {
  let newContent = parseFloat(content);
  let newPadding = parseFloat(padding);
  let newBorder = parseFloat(border);

  let totalWidth = newContent + newPadding * 2 + newBorder * 2;
  return totalWidth;
}
console.log(getElementWidth());

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

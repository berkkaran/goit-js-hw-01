function getElementWidth(content, padding, border) {
  const newContent = parseFloat(content);
  const newPadding = parseFloat(padding);
  const newBorder = parseFloat(border);

  const totalWidth = newContent + newPadding * 2 + newBorder * 2;
  return totalWidth;
}
console.log(getElementWidth());

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

function getElementWidth(content = "Npx", padding = "Npx", border = "Npx") {
  let contentWidth = parseFloat(content);
  let paddingValue = parseFloat(padding);
  let borderThickness = parseFloat(border);

  let totalWidth = contentWidth + paddingValue * 2 + borderThickness * 2;
  return totalWidth;
}
getElementWidth();

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

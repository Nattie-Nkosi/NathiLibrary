import { css } from "../../dom/css";

test("gets or sets the CSS styles of an element", () => {
  const element = document.createElement("div");
  element.style.backgroundColor = "red";

  expect(css(element, "background-color")).toBe("red");

  css(element, "background-color", "blue");
  expect(element.style.backgroundColor).toBe("blue");
});

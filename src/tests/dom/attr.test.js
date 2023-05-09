import { attr } from "../../dom/attr";

test("gets or sets an attribute on an element", () => {
  const element = document.createElement("div");
  element.setAttribute("data-test", "example");

  expect(attr(element, "data-test")).toBe("example");

  attr(element, "data-test", "new-value");
  expect(element.getAttribute("data-test")).toBe("new-value");
});

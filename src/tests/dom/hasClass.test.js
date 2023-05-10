import { hasClass } from "../../dom/hasClass";

test("checks if the specified element has a certain class", () => {
  const element = document.createElement("div");
  element.className = "example";

  expect(hasClass(element, "example")).toBe(true);
  expect(hasClass(element, "test")).toBe(false);
});

import { html } from "../../dom/html";

test("gets or sets the innerHTML of an element", () => {
  const element = document.createElement("div");
  element.innerHTML = "<span>Example</span>";

  expect(html(element)).toBe("<span>Example</span>");

  html(element, "<span>New Content</span>");
  expect(element.innerHTML).toBe("<span>New Content</span>");
});

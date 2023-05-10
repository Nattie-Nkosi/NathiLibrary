import { parent } from "../../dom/parent";

test("gets the parent element of a specified element", () => {
  const parentElement = document.createElement("div");
  const childElement = document.createElement("div");

  parentElement.appendChild(childElement);

  expect(parent(childElement)).toBe(parentElement);
});

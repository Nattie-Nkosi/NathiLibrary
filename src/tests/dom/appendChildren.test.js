import { appendChildren } from "../../dom/appendChildren";

test("appends an array of children to a parent element", () => {
  const parent = document.createElement("div");
  const child1 = document.createElement("span");
  const child2 = document.createElement("span");
  const child3 = document.createElement("span");

  appendChildren(parent, [child1, child2, child3]);

  expect(parent.children.length).toBe(3);
  expect(parent.children[0]).toBe(child1);
  expect(parent.children[1]).toBe(child2);
  expect(parent.children[2]).toBe(child3);
});

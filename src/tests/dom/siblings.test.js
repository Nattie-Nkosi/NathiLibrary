import { siblings } from "../../dom/siblings";

test("gets the siblings of an element", () => {
  const parent = document.createElement("div");
  const child1 = document.createElement("span");
  const child2 = document.createElement("p");
  const child3 = document.createElement("a");

  parent.appendChild(child1);
  parent.appendChild(child2);
  parent.appendChild(child3);

  expect(siblings(child1)).toEqual([child2, child3]);
  expect(siblings(child2)).toEqual([child1, child3]);
  expect(siblings(child3)).toEqual([child1, child2]);
});

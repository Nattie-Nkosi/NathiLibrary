import { toggle } from "../../dom/toggle";

test("toggles a class on the specified element", () => {
  const element = document.createElement("div");
  element.className = "example";

  toggle(element, "test");
  expect(element.className).toBe("example test");

  toggle(element, "test");
  expect(element.className).toBe("example");
});

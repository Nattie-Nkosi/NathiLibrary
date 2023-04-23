const NathiLib =
  typeof module !== "undefined" && module.exports
    ? require("./nathiLib")
    : window.NathiLib;
const nathiLib = new NathiLib();

describe("NathiLib", () => {
  let element;

  beforeEach(() => {
    element = document.createElement("div");
  });

  test("addClass should add a class to the specified element", () => {
    nathiLib.addClass(element, "test-class");
    expect(element.classList.contains("test-class")).toBe(true);
  });
});

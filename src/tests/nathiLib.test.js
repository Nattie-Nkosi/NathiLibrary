const NathiLib =
  typeof module !== "undefined" && module.exports
    ? require("./src")
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

  test("should add an event listener to the specified element", () => {
    const element = document.createElement("button");
    const mockCallback = jest.fn();

    customLib.on(element, "click", mockCallback);
    element.click();

    expect(mockCallback).toHaveBeenCalled();
  });

  test("should add an event listener using a CSS selector string", () => {
    document.body.innerHTML = `
      <button id='test-button'></button>
    `;

    const mockCallback = jest.fn();
    nathiLib.on("#test-button", "click", mockCallback);
    const element = document.querySelector("#test-button");
    element.click();

    expect(mockCallback).toHaveBeenCalled();
  });
});

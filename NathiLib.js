(function (global) {
  /**
   * NathiLib constructor function.
   */
  function NathiLib() {
    // Contructor function
  }

  /**
   * Create an HTML element with given attributes and text content.
   * @param {string} tagName - The tag name of the element to create.
   * @param {Object} attributes - An object containing the attributes and their values.
   * @param {string} [textContent] - The text content for the element.
   * @returns {HTMLElement} The created HTML element.
   */
  NathiLib.prototype.createHTMLElement = function (
    tagName,
    attributes,
    textContent
  ) {
    const element = document.createElement(tagName);

    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    if (textContent) {
      element.textContent = textContent;
    }

    return element;
  };

  /**
   * Append an array of children to a parent element.
   * @param {HTMLElement} parent - The parent element to which the children will be appended.
   * @param {Array<HTMLElement>} children - An array of HTML elements to append to the parent.
   */
  NathiLib.prototype.appendChildren = function (parent, children) {
    children.forEach((child) => parent.appendChild(child));
  };

  if (!global.NathiLib) {
    global.NathiLib = NathiLib;
  }
})(window);

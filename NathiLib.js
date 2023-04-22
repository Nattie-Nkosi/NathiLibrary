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

  /**
   * Adds a class to a specified element
   * @param {HTMLElement} element - The element to which the class will be added.
   * @param {string} className - Tyhe name of the class to add.
   */
  NathiLib.prototype.addClass = function (element, className) {
    if (element.classList) {
      // if the classList property is supported, use it to add class
      element.classList.add(className);
    } else {
      // If the classList property is not supported, concatenate the class
      element.classList += " " + className;
    }
  };

  /**
   * Removes a class from a specified elements
   * @param {HTMLElement} element - The element to which the class will be removed.
   * @param {string} className - the name of the class to removed
   */
  NathiLib.prototype.removeClass = function (element, className) {
    if (element.classList) {
      // if the classList property is supported, use it to remove the class
      element.classList.remove(className);
    } else {
      // If the classList property is not supported, remove the class using a RegExp
      var classToRemove = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
      element.className = element.className.replace(classToRemove, " ").trim();
    }
  };

  if (!global.NathiLib) {
    global.NathiLib = NathiLib;
  }
})(window);

//

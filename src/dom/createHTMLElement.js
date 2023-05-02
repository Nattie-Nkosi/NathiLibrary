/**
 * Create an HTML element with given attributes and text content.
 * @param {string} tagName - The tag name of the element to create.
 * @param {Object} attributes - An object containing the attributes and their values.
 * @param {string} [textContent] - The text content for the element.
 * @returns {HTMLElement} The created HTML element.
 */
export function createHTMLElement(tagName, attributes, textContent) {
  const element = document.createElement(tagName);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

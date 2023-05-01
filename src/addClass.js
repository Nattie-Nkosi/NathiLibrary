/**
 * Adds a class to a specified element
 * @param {HTMLElement} element - The element to which the class will be added.
 * @param {string} className - Tyhe name of the class to add.
 */
export function addClass(element, className) {
  if (element && className) {
    element.classList.add(className);
  }
}

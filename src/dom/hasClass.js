/**
 * Check if the specified element has a certain class.
 *
 * @param {HTMLElement} element - The element to check for the class.
 * @param {string} className - The class name to check.
 * @return {boolean} - True if the element has the specified class, false otherwise.
 */
export function hasClass(element, className) {
  if (element && className) {
    return element.className.contains(className);
  }
  return false;
}

/**
 * Removes a class from a specified elements
 * @param {HTMLElement} element - The element to which the class will be removed.
 * @param {string} className - the name of the class to removed
 */
export function removeClass(element, className) {
  if (element.classList) {
    // if the classList property is supported, use it to remove the class
    element.classList.remove(className);
  } else {
    // If the classList property is not supported, remove the class using a RegExp
    var classToRemove = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
    element.className = element.className.replace(classToRemove, " ").trim();
  }
}

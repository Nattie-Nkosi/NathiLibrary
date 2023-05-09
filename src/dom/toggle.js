/**
 * Toggle a class on the specified element.
 * If the class is present on the element, it will be removed.
 * If the class is not present on the element, it will be added.
 *
 * @param {HTMLElement} element - The element to toggle the class on.
 * @param {string} className - The class name to toggle.
 */
export function toggle(element, className) {
  if (element && className) {
    element.classList.toggle(className);
  }
}

/**
 * Get the parent element of a specified element.
 *
 * @param {HTMLElement} element - The element to get the parent for.
 * @return {HTMLElement} - The parent element.
 */
export function parent(element) {
  if (element) {
    return element.parentElement;
  }
}

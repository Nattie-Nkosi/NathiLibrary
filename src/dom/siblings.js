/**
 * Get the siblings of an element.
 *
 * @param {HTMLElement} element - The element to get the siblings for.
 * @return {Array} - An array of sibling elements.
 */
export function siblings(element) {
  if (element) {
    return Array.prototype.filter.call(element.parentNode.children, (child) => {
      return child !== element;
    });
  }
  return [];
}

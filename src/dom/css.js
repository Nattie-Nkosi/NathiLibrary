/**
 * Get or set the CSS styles of an element.
 * If value is not provided, the current value of the CSS property will be returned.
 * If value is provided, the CSS property will be set to the provided value.
 *
 * @param {HTMLElement} element - The element to get or set the CSS property.
 * @param {string} property - The name of the CSS property to get or set.
 * @param {string} [value] - The value to set for the CSS property (optional).
 * @return {string} - The current value of the CSS property if value is not provided.
 */
export function css(element, property, value) {
  if (element && property) {
    if (value === undefined) {
      return getComputedStyle(element)[property];
    } else {
      element.style[property] = value;
    }
  }
}

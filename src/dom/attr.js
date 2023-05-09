/**
 * Get or set an attribute on an element.
 * If value is not provided, the current value of the attribute will be returned.
 * If value is provided, the attribute will be set to the provided value.
 *
 * @param {HTMLElement} element - The element to get or set the attribute.
 * @param {string} attributeName - The name of the attribute to get or set.
 * @param {string} [value] - The value to set for the attribute (optional).
 * @return {string} - The current value of the attribute if value is not provided.
 */
export function attr(element, attributeName, value) {
  if (element && attributeName) {
    if (value === undefined) {
      return element.getAttribute(attributeName);
    } else {
      element.setAttribute(attributeName, value);
    }
  }
}

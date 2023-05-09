/**
 * Get or set the innerHTML of an element.
 * If content is not provided, the current innerHTML of the element will be returned.
 * If content is provided, the innerHTML of the element will be set to the provided content.
 *
 * @param {HTMLElement} element - The element to get or set the innerHTML.
 * @param {string} [content] - The content to set as the element's innerHTML (optional).
 * @return {string} - The current innerHTML of the element if content is not provided.
 */
export function html(element, content) {
  if (element) {
    if (content === undefined) {
      return element.innerHTML;
    } else {
      element.innerHTML = content;
    }
  }
}

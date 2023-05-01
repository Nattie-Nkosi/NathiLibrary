/**
 * Adds an event listener to the specified element or element found by the provided CSS selector
 *
 * @param {string|HTMLElement} selectorOrElement - The selector string or DOM element to which the event listener should be added.
 * @param {string} eventName - The name of the event to listen for.
 * @param {Function} callback - The function to be called when the event occurs.
 */

export function on(selectorOrElement, eventName, callback) {
  // Determine if the first argument is a CSS selector string or a DOM element
  const element =
    typeof selectorOrElement === "string"
      ? document.querySelector(selectorOrElement)
      : selectorOrElement;

  // If an element, event name, and callback are provided, add the event listener
  if (element && eventName && callback) {
    element.addEventListener(eventName, callback);
  }
}

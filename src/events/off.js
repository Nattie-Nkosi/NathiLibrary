/**
 * Removes an event listener from an element or element found by the provided CSS selector
 *
 * @param {string|HTMLElement} selectorOrElement - The CSS selector string or DOM element from which the event listener should be removed.
 * @param {string} eventName - The name of the event to stop listening for.
 * @param {Function} callback - The same function that was used when the event listener was added using the on() method.
 */
export function off(selectorOrElement, eventName, callback) {
  const element =
    typeof selectorOrElement === "string"
      ? document.querySelector(selectorOrElement)
      : selectorOrElement;

  if (element && eventName && callback) {
    element.removeEventListener(eventName, callback);
  }
}

/* The off() method first checks whether the provided selectorOrElement is a string or a DOM element. If it's a string, it queries the DOM for the first element matching the selector; otherwise, it uses the provided DOM element directly. Then, if the element, eventName, and callback are all valid, it removes the event listener from the specified element. */

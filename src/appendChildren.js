/**
 * Append an array of children to a parent element.
 * @param {HTMLElement} parent - The parent element to which the children will be appended.
 * @param {Array<HTMLElement>} children - An array of HTML elements to append to the parent.
 */
export function appendChildren(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}

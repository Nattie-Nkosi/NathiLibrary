/**
 * @description A lightweight custom JavaScript library to create and manipulate HTML elements.
 * @author Nattie Nkosi
 */
import { createHTMLElement } from "../dom/createHTMLElement";
import { appendChildren } from "../dom/appendChildren";
import { addClass } from "../dom/addClass";
import { removeClass } from "../dom/removeClass";
import { on } from "../events/on";
import { off } from "../events/off";

class NathiLib {
  createHTMLElement = createHTMLElement;
  appendChildren = appendChildren;
  addClass = addClass;
  removeClass = removeClass;
  on = on;
  off = off;
}

// Export the CustomLib class for Node.js and browser environments
if (typeof module !== "undefined" && module.exports) {
  // Node.js/CommonJS environment
  module.exports = NathiLib;
} else {
  // Browser environment
  window.NathiLib = NathiLib;
}

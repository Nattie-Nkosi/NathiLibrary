/**
 * @description A lightweight custom JavaScript library to create and manipulate HTML elements.
 * @author Nattie Nkosi
 */
import { createHTMLElement } from "./createHTMLElement";
import { appendChildren } from "./appendChildren";
import { addClass } from "./addClass";
import { removeClass } from "./removeClass";
import { on } from "./on";

class NathiLib {
  createHTMLElement = createHTMLElement;
  appendChildren = appendChildren;
  addClass = addClass;
  removeClass = removeClass;
  on = on;
}

// Export the CustomLib class for Node.js and browser environments
if (typeof module !== "undefined" && module.exports) {
  // Node.js/CommonJS environment
  module.exports = NathiLib;
} else {
  // Browser environment
  window.NathiLib = NathiLib;
}

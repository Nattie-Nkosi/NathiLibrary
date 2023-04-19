(function (global) {
  function NathiLib() {
    // Contructor function
  }

  NathiLib.prototype.createHTMLElement = function (
    tagName,
    attributes,
    textContent
  ) {
    const element = document.createElement(tagName);

    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    if (textContent) {
      element.textContent = textContent;
    }

    return element;
  };

  NathiLib.prototype.appendChildren = function (parent, children) {
    children.forEach((child) => parent.appendChild(child));
  };

  if (!global.NathiLib) {
    global.NathiLib = NathiLib;
  }
})(window);

"use strict";

function duplicateMenu() {
  //get all of the anchor elements from top menu
  var topList = document.querySelectorAll('ul#primaryNavigation li a');
  var newList = document.createElement('ul');
  topList.forEach(function (menuItem) {
    var newLI = document.createElement('li');
    var newLink = document.createElement('a');
    newLink.setAttribute('href', menuItem.getAttribute('href')); // 'copy' the textContent from upper menu to new menu
    // append children to make them appear in the DOM
  });
  var primaryNavigation = document.querySelector('#primaryNavigation');
  var clonedprimaryNavigation = primaryNavigation.cloneNode(true);
  clonedprimaryNavigation.id = '#smallNavArea';
  document.body.appendChild(clonedprimaryNavigation);
}

duplicateMenu();
//# sourceMappingURL=main.dev.js.map

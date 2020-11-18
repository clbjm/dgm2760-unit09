function duplicateMenu() {
//get all of the anchor elements from top menu
let topList = document.querySelectorAll('ul#primaryNavigation li a')

let newList = document.createElement('ul')

topList.forEach(menuItem => {
    let newLI = document.createElement('li')
    let newLink = document.createElement('a')
    newLink.setAttribute('href', menuItem.getAttribute('href'))
    // 'copy' the textContent from upper menu to new menu
    // append children to make them appear in the DOM
})
let primaryNavigation = document.querySelector('#primaryNavigation');
let clonedprimaryNavigation = primaryNavigation.cloneNode(true);
clonedprimaryNavigation.id = 'smallNavArea';
document.body.appendChild(clonedprimaryNavigation);
}
duplicateMenu()
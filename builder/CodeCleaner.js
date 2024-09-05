removeJQClasses()
function removeJQClasses() {
const elements = document.querySelectorAll('*');
elements.forEach(element => {
  const classes = element.classList;
  for (let i = classes.length - 1; i >= 0; i--) {
    if (classes[i].startsWith('JQ')) {
      classes.remove(classes[i]);
    }
  }
});
}
removeEmptyClasses()
function removeEmptyClasses() {
const elements = document.querySelectorAll('*');
elements.forEach(element => {
  if (element.classList.length === 0) {
    element.removeAttribute('class');
  }
});
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('*[class=""]');
  
    elements.forEach(element => {
      element.removeAttribute('class');
    });
  });
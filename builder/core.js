fetch('builder/component/buttons/button.html')
  .then(response => response.text())
  .then(data => {
    const button = data; // Assign the fetched HTML to the btn variable
    appendToClass('JQbutton', button);
  });

fetch('builder/component/contents/content.html')
  .then(response => response.text())
  .then(data => {
    const content = data; // Assign the fetched HTML to the btn variable
    appendToClass('JQcontent', content);
  });

function appendToClass(className, htmlContent) {
  const elements = document.getElementsByClassName(className);

  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML += htmlContent;
    // elements[i].classList.remove(className)
  }
}

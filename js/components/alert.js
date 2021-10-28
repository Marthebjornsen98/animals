export default function alert(domElement, cssClass, errorMessage) {
  domElement.innerHTML = `
    <div class="alert ${cssClass}">${errorMessage}</div>
  `;

  setTimeout(() => {
    domElement.innerHTML = "";
  }, 2000);
}

export default function createHTML(domElement, arrayOfArticles, nameOfItem) {
  if (arrayOfArticles.length === 0) {
    domElement.innerHTML = `<h1>There are no ${nameOfItem}</h1>`;
    return;
  }

  let html = "";
  domElement.innerHTML = "";
  arrayOfArticles.forEach(({ id, name, type, age, color }) => {
    html += `
			<div class="col-sm-4">
				<div class="card">
					<div class="card-body">
						<h2 class="card-title">${name}</h2>
						<p class="card-text">${type}</p>
						<p class="card-text">${color}</p>
						<i class="far fa-heart" data-id="${id}" data-name="${name}" data-type="${type}" data-age="${age}" data-color="${color}"></i>
					</div>
				</div>
			</div>
		`;
  });

  domElement.innerHTML = html;
}

const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const resultsDiv = document.getElementById('results');
const apiBase = '';

btn.addEventListener('click', () => {
  const query = inp.value.trim();
  if (!query) {
    resultsDiv.innerHTML = '<p>Please enter a search term.</p>';
    return;
  }

  const url = apiBase + encodeURIComponent(query);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const products = data.products;
      if (products.length === 0) {
        resultsDiv.innerHTML = '<p>No products found.</p>';
        return;
      }

      // Display products
      resultsDiv.innerHTML = products.map(product => `
        <div class="product">
          <h3>${product.title}</h3>
          <p><strong>Price:</strong> $${product.price}</p>
          <p>${product.description}</p>
          <img src="${product.thumbnail}" alt="${product.title}" width="100">
        </div>
      `).join('');
    })
    .catch(error => {
      resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});

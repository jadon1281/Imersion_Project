const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const tempUrl = 'https://dummyjson.com/products/search?q=';

btn.addEventListener('click', () => {
    const URL = tempUrl + encodeURIComponent(inp.value);  // Encoding for safety

    fetch(URL)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);  // Display products or update the DOM here
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
});

// Access Key - WwuM5rlw5lDPQb-tOBr4TX8hdhMUsTxXdp5xOhROi4Q
// Secret Key - yAd85jq5u7W9vk8yaSiW0Q7SOjHrzB8X6ZRj5zbBKOQ
// Application ID - 537551

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchBtn = document.getElementById("show-more-btn");

let Keyword = "";
let page = 1;
const accessKey = "WwuM5rlw5lDPQb-tOBr4TX8hdhMUsTxXdp5xOhROi4Q";

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1) {
        searchResult.innerHTML = "";
    }
    
    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

        searchBtn.style.display = 'block';
    })
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

searchBtn.addEventListener("click", () => {
    page++;
    searchImages();
})
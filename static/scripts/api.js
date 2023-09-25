// Your JavaScript code goes here
const API_KEY = 'SuaAPIAqui';
const country = "us";
const tags = ["general", "technology", "health", "politics", "science", "sports"];
let requestURL;



//GERAR CARDS COM CÓDIGO HTML 
const generateUI = (articles) => {
    for (let item of articles){
        //Criar Elemento card
        let card = document.createElement("div");
        card.classList.add("news-card");
        //Criar Html do card
        card.innerHTML = `
        <div class = "news-image-container"> 
            <img src = "${item.urlToImage || "../static/images/imgNotFound.jpg"}" alt="news image width = 20px" />
        </div>
        
        <div class = 'news-content'>
            <div class = 'news-title'>
                ${item.title}
            </div>
            <div class = 'news-description'>
                ${item.description || item.content}
            </div>
        </div>
        <a href="${item.url}" target="_blank" class="view-button">Ler Matéria</a>`;
        container.appendChild(card);
    }
};

const getNews = async () =>{
    container.innerHTML = "";
    let response = await fetch(requestURL);
    if(!response.ok) {
        alert("Data unavailable at the moment. Please try again latter");
        return false;
    }
    let data = await response.json(); 
    console.log(data);
    generateUI(data.articles);
};

const getQuery = (event) => {
    let query = document.getElementById('input-search').value;
    if(query!= ""){
        let elements = document.querySelectorAll(".options");
        elements.forEach((element) => {
            element.parentNode.removeChild(element);
        });
        requestURL = `https://newsapi.org/v2/q=${query}&country=${country}&category=general&apiKey=${API_KEY}`;
        console.log(requestURL)
        event.target.classList.add("active");
        getNews();
    } else{
        alert("Digite o que deseja procurar");    
    }
}

const selectCategory = (e, category) => {
    let tags = document.querySelectorAll(".option")
    tags.forEach((element) => {
        element.classList.remove("active")  
    });
    requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
    e.target.classList.add(".active");
    getNews();
};

const createOptions = () => {
    for (let tag of tags) {
        console.log(tag);
        optionsContainer.innerHTML += `<button class="options ${tag == "general" ? "active" : ""}" onclick="selectCategory(event, \'${tag}\')">${tag}</button>`;
    }
};

const init = () => {
    optionsContainer.innerHTML = "";
    getNews();
    createOptions();
}

window.onload = () => {
    requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${API_KEY}`;
    init();
}
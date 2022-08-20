console.log("This is working");

// Initialize the news api parameters
var apiKey = "e92e34bf4fbc4b699ee77c739f997ab5";
var source = "al-jazeera-english";
// ary-news
// cnn
// bbc-news
// bbc-sports
// Metro
// new-york-magazine
// etc

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");


// Create an Ajex get request
const xhr = new XMLHttpRequest();
// xhr.open("GET","https://newsapi.org/v2/top-headlines?sources=BBc-news&apiKey=e92e34bf4fbc4b699ee77c739f997ab5", true);
xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(xhr.responseText);
        let articles = json.articles;
        // console.log(articles);

        let newsHTML = " ";
        articles.forEach(function(element,index){
            // console.log(articles[news]);
            newsHTML += `
        <div class="card">
            <div class="card-header" id="heading${index}">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                        aria-expanded="true" aria-controls="collapse${index}">
                        <b>Breaking News${index+1}:</b>${element["title"]};
                    </button>
                </h5>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                data-parent="#newsAccordion">
                <div class="card-body">${element["content"]}. <a href="${element["url"]}" target="_blank">Read more here</a></div>
        </div>
        </div>`
        });
        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.log("Error");
    }
};

xhr.send();





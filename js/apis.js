let generateFactsEl = document.getElementById("generate-facts")
let generateFactsContent = document.getElementById("fact-content")

let randomNumberGenerator = (arr) => {
    let randomNumber = Math.floor(Math.random() * arr.length)
    return randomNumber
}

function getRandomCatQuote() {
    catfactsContainer = fetch("https://cat-fact.herokuapp.com/facts").then(
        response => response.json()
    ).then(data => {
        generateFactsContent.textContent = data[randomNumberGenerator(data)].text
    }).catch(error => {
        console.error(error);
    }
    )
}

//listen to events

generateFactsEl.addEventListener("click",getRandomCatQuote)

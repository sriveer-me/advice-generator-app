let randomQuoteButton = document.querySelector('a.btn');
let adviceNumber = document.querySelector('.primary-heading--number');
let adviceText = document.querySelector('.body-text');

async function refreshQuote()
{
    let quote = await axios.get("https://api.adviceslip.com/advice");
    let {id,advice} = quote.data.slip;
    adviceNumber.innerHTML = `${id}`;
    adviceText.innerHTML = `${advice}`;
}

refreshQuote();

randomQuoteButton.addEventListener("click",function(e){
    e.preventDefault();
    refreshQuote();
    // window.alert('hi');
    // console.log('refreshed quote');
});
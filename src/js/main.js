let randomQuoteButton = document.querySelector('a.btn');
let adviceNumber = document.querySelector('.primary-heading--number');
let adviceText = document.querySelector('.body-text');

async function refreshQuote()
{
    try{
        let quote = await axios.get(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
        
        let {id,advice} = quote.data.slip;
        adviceNumber.innerHTML = `${id}`;
        adviceText.innerHTML = `${advice}`;
    }
    catch(error){
        console.log(error);
    }
}

refreshQuote();

randomQuoteButton.addEventListener("click",function(e){
    e.preventDefault();
    refreshQuote();
});
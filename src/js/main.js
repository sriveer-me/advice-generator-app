let randomQuoteButton = document.querySelector('a.btn');
let adviceNumber = document.querySelector('.primary-heading--number');
let adviceText = document.querySelector('.body-text');

async function refreshQuote()
{
    try{
        let response = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' });
        let slip = (await response.json()).slip;
        
        let {id,advice} = slip;
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
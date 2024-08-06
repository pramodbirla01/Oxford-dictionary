const url="https://api.dictionaryapi.dev/api/v2/entries/en/";

let result=document.querySelector('.result');

let btn=document.querySelector('.search')
let def=document.querySelector('.defination');
let inval=document.querySelector('.inval');

btn.addEventListener("click",()=>{
    let inputval=document.querySelector('.inputword').value;

    fetch(`${url}${inputval}`)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
        console.log(data[0].meanings[0].definitions[0].definition);
        def.innerHTML=`${data[0].meanings[0].definitions[0].definition}`
        
    });
    
    document.querySelector('.inputword').value='';
    inval.innerHTML=inputval;
});
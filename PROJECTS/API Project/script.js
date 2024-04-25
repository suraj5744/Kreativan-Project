const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#press");



const getFacts = async ()=> {
    console.log("Getting the Data..");
    let response = await fetch(URL);
    console.log(response); // JSON format
    let data = await response.json();
    factPara.innerText = data[2].text ;
    
    
};


btn.addEventListener("click", getFacts);




    


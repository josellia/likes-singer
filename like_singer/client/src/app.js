let singers = [];
//Datas
async function getSingers(){
    let URI = "http://localhost:3000/api/singers";
    try {
        let res = await fetch(URI);
        singers = await res.json();
        console.log(singers);
    }catch(error){
        console.log(console.error);
    }  
}

async function postSinger(singer){
    const res = await fetch(URI, {
        method: 'POST',
        body: singer
    });
    const data = res.json();
    return data;
}

document.querySelector('#singer-form')
.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const status = document.querySelector('#status').value;
    
});






async function init(){
    await getSingers();
}

init();

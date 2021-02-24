let singers = [];
//Datas
let URI = "http://localhost:3000/api/singers";

async function getSingers() {
  try {
    let res = await fetch(URI);
    singers = await res.json();
    console.log(singers);
  } catch (error) {
    console.log(console.error);
  }
}

function  postSinger() {
  const name = document.querySelector("#name").value;
  const status = document.querySelector('#status').checked;
 
  const dataSinger = {
    name: name,
    status: status,
    likes:0
  };
  fetch(URI, {
    method: "POST",
    body: JSON.stringify(dataSinger),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
     // return Promise.reject(response);
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
}

document.querySelector("#singer-form").addEventListener("submit", function (e) {
  e.preventDefault();
  postSinger();
});

function templateButton(singer){
  return `
    <button class="btn btn-primary">
        <span class="name-singer">${singer.name}</span>
        <span class="fas fa-heart"> 0likes</span>
        
    </button>
  `
}


function render(){
 const singerCard = document.querySelector('#singer-cards');
singerCard.innerHTML =  singers.map((singer) => {
   return templateButton(singer)
 })
}

async function init() {
  await getSingers();
  render();
}

init();

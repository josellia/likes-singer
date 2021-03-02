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

function  createSinger() {
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

function saveLikes(id) {

  fetch(`${URI}/${id}`, {
    method: "POST",
    body: JSON.stringify({id}),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })

  .then(function(res){
    if(res.ok){
      return res.json();
    }
  })
  .catch(function(error){
    console.log("Something went wrong", error);
  });
}


document.querySelector("#singer-form").addEventListener("submit", function (e) {
  e.preventDefault();
  createSinger();
});

function handleButton(singerName){
  singers.forEach((singer) => {
    if(singer.name === singerName){
      singer.likes = singer.likes + 1;
      console.log(singer);
      saveLikes(singer._id);
    } 
    render();
  })
}

function templateButton(singer){
  return `
    <button class="btn btn-outline-info" onclick="handleButton('${singer.name}')">
        <span class="name-singer">${singer.name}</span>
        <span> <i class="fas fa-heart color-heart"></i> ${singer.likes}</span>      
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

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

function postSinger() {
  const name = document.querySelector("#name").value;
 
  const dataSinger = {
    name: name,
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
      return Promise.reject(response);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
}

document.querySelector("#singer-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // const name = document.querySelector('#name').value;
  // const status = document.querySelector('#status').value;

  // const formData = new FormData();
  // formData.append('name', name);
  // formData.append('status', status);
  postSinger();
});


async function init() {
  await getSingers();
}

init();
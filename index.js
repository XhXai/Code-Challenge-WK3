const url = "http://localhost:3000/films";
const listContainer = document.querySelector("#list-container");

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((films) => {
    films.forEach((film) => {
      const listItem = document.createElement("div");
      listItem.classList.add("grid-item");

      // Create a new image element for the movie poster
      const poster = document.createElement("img");
      poster.src = film.poster;
      poster.setAttribute('style', 'display: none');

      // Add an event listener to the movie title that toggles the poster display
      const title = document.createElement("h2");
      title.innerHTML = film.title;
      title.addEventListener("click", () => {
                    if (poster.style.display === "none") {
                        poster.setAttribute('style', 'display: block');
              } else {
                poster.setAttribute('style', 'display: none');
              }
      });

      // Append the title and poster elements to the list item
      listItem.appendChild(title);
      listItem.appendChild(poster);
      listContainer.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

  // PATCH 
function editFilmHandler() {
    const film = {
    id: selectedFilm.id,
    title: movieTitleElement.value,
    poster: moviePosterElement.value,
    runtime: movieRuntimeElement.value,
    showtime: movieShowtimeElement.value,
    tickets: movieTicketsElement.value
};
fetch(URL, {
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(film)
})
.then(response => response.json())
.then(data => {
    films.push(data);
    renderfilms();
    selectfilm(data);
})
  console.log('Edit film button clicked');
}


// POST
const myform = document.getElementById('myform');
addFilmForm.addEventListener('Add-Film', addFilmHandler);

function addFilmHandler(event) {
  event.preventDefault(); 

  const movieTitleElement = document.getElementById('title');
  const moviePosterElement = document.getElementById('poster');
  const movieRuntimeElement = document.getElementById('runtime');
  const movieShowtimeElement = document.getElementById('showtime');
  const movieTicketsElement = document.getElementById('tickets');
  
  const film = {
    title:event.target.title.value,
    poster: event.target.poster.value,
    runtime: event.target.runtime.value,
    showtime: event.target.showtime.value,
    tickets: event.target.tickets.value
  };

  const Url = ""; 

  fetch(Url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(film)
    })
    .then(response => response.json())
    .then(data => {
      films.push(data);
      renderFilms(); 
      selectFilm(data); 
    })
    console.log()
}

// DELETE
  // document.querySelector('#Del').addEventListener('click', () => {
  //   Film.remove()
  //   Filmdelete(Film)
  // })

  // function Filmdelete()
  // fetch('url/${id}' {
  //   method:'DELETE',
  //   headers: {
  //     'Content-type': application/JSON
  //   }
  // })
  // .then(res => res.json())
  // .then (film => console.log(film))


  
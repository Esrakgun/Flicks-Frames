// const API_URL =
//   'https:api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
// const SEARCH_API =
//   'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

//   const form = document.getElementById('form')
//   const search = document.getElementById('search')
//   const main = document.getElementById('main')
  
// getMovies(API_URL)
// async function getMovies(url){
//     const res =await fetch(url)
//     const data =await res.json ()
//     console.log(data.results)
//     showMovies(data.results)
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()

//     const searchTerm = search.value
//      if (searchTerm && searchTerm !== "") {
//        getMovies(SEARCH_API + searchTerm);
//        search.value =""
//      }else{
//         window.location.reload()

//      }
// })

// function showMovies(movies) {
//   main.innerHTML = "";

//   movies.forEach((movie) => {
//     const { title, poster_path, vote_average, overview } = movie;

//     const movieEl = document.createElement("div");
//     movieEl.classList.add("movie");

//     movieEl.innerHTML = `
    
//     <img
//     src="${IMG_PATH + poster_path}" alt="${title}"
//   />
//   <div class="movie-info">
//     <h3>${title}</h3>
//     <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//   </div>
//   <div class="overview">
//     <h3> ${title}  <small> Overview </small> </h3>
//     <p>
//      ${overview}
//     </p>
//   </div>

//     `;

//     main.appendChild(movieEl);
//   });
// }

// function getClassByRate(vote) {
//   if (vote >= 8) {
//     return "green";
//   } else if (vote >= 5) {
//     return "orange";
//   } else {
//     return "red";
//   }
// }


const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL);

async function getMovies(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Filmler alınırken bir hata oluştu");
    const data = await res.json();
    console.log(data.results);
    showMovies(data.results);
  } catch (error) {
    console.error(error);
    main.innerHTML = `<p>Bir şeyler yanlış gitti: ${error.message}</p>`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + encodeURIComponent(searchTerm));
    search.value = "";
  } else {
    alert("Lütfen bir arama terimi girin");
  }
});

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}" />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>${title} <small>Özet</small></h3>
        <p>${overview}</p>
      </div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

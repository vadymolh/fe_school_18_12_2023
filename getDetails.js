const API_KEY = "YOUR_API_KEY"; // ставимо свій API_KEY
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

let movieID = sessionStorage.getItem("movieID");

axios.get(BASE_URL + "&i=" + movieID)
    .then(response =>{
        console.log(response);
        let movie = response.data;
        renderDetails(movie);
    });


    
// Функція відображення інформації про фільм
function renderDetails(movie) {
    console.log("RENDERING...");
    let output = `<div class="row p-4">
                    <div class="col-md-5 col-sm-12">
                        <img src="${movie.Poster}" alt="">
                    </div>
                    <div class="col-md-7 col-sm-12">
                        <h2 class="p2">${movie.Title}</h2>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Жанр: </strong>${movie.Genre}</li>
                            <li class="list-group-item"><strong>Актори: </strong>${movie.Actors}</li>
                            <li class="list-group-item"><strong>Тривалість: </strong>${movie.Runtime}</li>
                        </ul>
                    </div>                
                </div>
                <div class="row p-4">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="p-2">Сюжет фільму</h3>
                        </li>
                        <li class="list-group-item">
                            <p>${movie.Plot}</p>
                        </li>
                    </ul>
                </div>
                `;
    $('.movies').html(output);

}
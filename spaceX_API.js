let url = "https://api.spacexdata.com/v4/landpads";
let div = document.querySelector("#pads");


fetch(url).then((res)=>{
    return res.json()
    })
    .then((data) => {
        data.forEach((el)=>{
            let image = el.images.large[0];
            let name = el.full_name;
            let detail = el.details;
            console.log(image);
            let html = `
            <div class="col-md-4">
                <div class="card bg-light">
                    <img  class="card-img-top" src="${image}" alt="launchpad photo">
                    <div class="card-body">
                        <h5>${name}</h5>
                        <p>${detail}</p>
                    </div>
                </div>
            </div>
            `;

            div.firstElementChild.insertAdjacentHTML("afterend", html);
        })
    });
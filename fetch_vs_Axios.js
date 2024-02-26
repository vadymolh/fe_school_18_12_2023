let url = "https://jsonplaceholder.typicode.com/users/1";
let toDoUrl= "https://jsonplaceholder.typicode.com/todos/1";
let postUrl = "https://jsonplaceholder.typicode.com/posts";

//1. Менше викликів then

//GET запити за допомогою fetch
// fetch(url).then((response) =>{
//         console.log("FETCH RESPONSE:", response);
//         if (!response.ok){
//              console.log("Error occured", response.status);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log("Error occured! - ", err)
//     });


// Axios GET запит
// axios.get(url).then(
//     response => {
//         console.log("AXIOS RESPONSE:", response);
//         console.log(response.data);
//     }
// );





// 2. Auto stringify

// POST request 
// fetch(postUrl, {
//     method: "POST",
//     body: JSON.stringify({userId:1, 
//                            id:199, 
//                            title:"Mypost", 
//                            body: "Some text"})
// }).then(response => {
//     console.log("POST response");
//     return response.text();
// }).then( text => {
//     console.log(text);
// });



// axios.post(postUrl, {
//     data: {userId:1, 
//             id:199, 
//             title:"Mypost", 
//             body: "Some text"}
// }).then(response=> console.log(response)); 





// 3. Error handling

// fetch(url).then((response) =>{
//         console.log("FETCH RESPONSE:", response);
//         if (!response.ok){
//              console.log("NETWORK Error occured", response.status);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log("Error occured! - ", err)
//     });


// axios.get(url).then(
//         response => {
//             console.log("AXIOS RESPONSE:", response);
//             console.log(response.data);
//         }).catch( err => {
//             console.log("Axios network error",err.message);
//         });




// 4. Interceptors 
// axios.interceptors.request.use(config=>{
//     console.log("REquest was sent");
//     return config;
// });

// axios.get(url).then(
//     response => {
//         console.log("AXIOS RESPONSE:", response);
//         console.log(response.data);
//     }).catch( err => {
//         console.log("Axios network error",err.message);
//     });




// 5. Timeout in AXIOS
axios.get(url, {
    timeout: 5000,
}).then(
    response => {
        console.log("AXIOS RESPONSE:", response);
        console.log(response.data);
    }).catch( err => {
        console.log("Timeout exceeded", err.message);
    });
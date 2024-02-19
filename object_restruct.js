let input_data = `[
    {
      "categories": ["dev"],
      "created_at": "2020-01-05 13:42:19.324003",
      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id": "elgv2wkvt8ioag6xywykbq",
      "updated_at": "2020-01-05 13:42:19.324003",
      "url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
      "value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
    },
    {
      "categories": ["dev"],
      "created_at": "2020-01-05 13:42:19.324003",
      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id": "ae-78cogr-cb6x9hluwqtw",
      "updated_at": "2020-01-05 13:42:19.324003",
      "url": "https://api.chucknorris.io/jokes/ae-78cogr-cb6x9hluwqtw",
      "value": "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris."
    }
  ]`;

let arr_objs =  JSON.parse(input_data);
console.log(arr_objs);


let first_obj = arr_objs[0]; // get first


// Як дістаються дані

// Спосіб 1 
let value1 = first_obj["value"];        // first_obj.value; // 
let cat1 = first_obj["categories"][0];  // first_obj.categories[0]
console.log(value1);
console.log(cat1);


//  Спосіб 2
let {value: value2, categories: [cat2] } = first_obj

console.log(value2);
console.log(cat2);
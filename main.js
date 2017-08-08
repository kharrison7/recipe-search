console.log("JS On");

function getSearch(){
  console.log("get_Search Running");
  let search_input = document.getElementById("search_items").value;
  console.log(`search_input: ` + search_input);


let x = 'http://recipepuppyproxy.herokuapp.com/api/?q=';
let y = x + search_input;
fetchGet(y);

// THis runs the fetch.
function fetchGet(url){
fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        console.log("Data First Result: " + data.results[0].title);

        for (let i = 0; i < 10; i++){
            let result = data.results[i];
            let image_Thumb = document.getElementById('fill' +i);
            let slot = document.getElementById('slot' +i);
            slot.innerHTML = result.title + "\nIngredients: " + result.ingredients + "\nLink: " + result.href;
            console.log("href: " + result.href);
            console.log("Image: " + result.thumbnail);

            // This puts in 'No Image Found' if the image is absent.
            let a = result.thumbnail;
            if( a === '' ){
              a = "https://www.shearwater.com/wp-content/plugins/lightbox/images/No-image-found.jpg"
            }
            image_Thumb.setAttribute("style", "background-image: url("+a+");");

          }




// This may eventually do something.
// let fill = `
// <p>${data.title}</p>
// <br>
// <p>Results: ${data.results}</p>
// `;
// let text_Result = document.getElementById('all_left_items');
// text_Result.innerHTML = fill;

   })
 });
};


}

// end of getSearch function.

console.log("JS On");


// let url = "http://www.recipepuppy.com/api/";
//
// fetch(url, {
//   method: "post",
//   headers: {
//     "Content-type": "http://www.recipepuppy.com/api/?q=search-term"
//   },
//   body: "body content goes here"
// })
//   // .then(json)
//   .then(function(data) {
//     console.log("Request succeeded with JSON response", data);
//   })
//   .catch(function(error) {
//     console.log("Request failed", error);
//   });


function getSearch(){
  console.log("get_Search Running");
  let search_input = document.getElementById("search_items").value;
  console.log(`search_input: ` + search_input);





let x = 'http://recipepuppyproxy.herokuapp.com/api/?i=';
let y = x + search_input;
fetchGet(y);

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
        console.log("Data Result: " + data.results[0].title);



// This may eventually do something.
let fill = `
<p>${data.title}</p>
<br>
<p>Results: ${data.results}</p>

`;


let text_Result = document.getElementById('all_left_items');
text_Result.innerHTML = fill;

   })
 });
};


}

// end of getSearch function.

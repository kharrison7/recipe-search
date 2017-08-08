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
        console.log("Title of Data: " + data.title);




let fill = ``;


// This removes previous search queries.
let remove_list = document.getElementsByClassName("searched_Result");
while ( 0 < remove_list.length ){
 remove_list[0].remove();
}

// This adds in the new search results.
 let clockSpot = document.querySelector( "#all_left_items" );
 let clock       = document.createElement( "div" );
 clock.setAttribute("class", "searched_Result");
 let liH2     = document.createElement( "h2" );

 // This moves the text to the H2.
     liH2.innerHTML = `${data.title}` ;
 // This adds the H2 to the li tile.
     clock.appendChild( liH2 );
 // This adds the li to the itemList.
     clockSpot.appendChild( clock );


   })
 });
};


}

// end of getSearch function.

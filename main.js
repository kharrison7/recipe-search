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




fetch('https://api.github.com/users/kharrison7')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }


      // Examine the text in the response
      response.json().then(function(data) {
        console.log("data: " + data.login);



// This makes the items appear on the page.
//       let markup = `
//
//                   <div class="your_name">
//                     <h1>${data.name}</h1>
//                   </div>
//
// <div class="box_of_three">
//
//                 <div class="title1">
//                   <h2>The Basics</h2>
//                   <p>Name: ${data.name}</p>
//                   <p>Github URL: <a href="${data.html_url}" class="bright">${data.login}</a></p>
//                   <p>Email: ${email_address}</p>
//                   <p>Company: ${data.company}</p>
//                   <p>Website: <a href="${data.blog}" class="bright">${data.blog}</a></p>
//                 </div>
//
//                 <div class="title2">
//                   <h2>The Story</h2>
//                   <p>Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus arcu tellus, tincidunt quis erat quis, rhoncus cursus lacus. Fusce tincidunt metus vel convallis venenatis. Phasellus vitae tristique ligula. Integer non purus quis nibh ultrices commodo.</p>
//                 </div>
//
//                  <div class="profile_Image">
//                      <img class="img-circle" src="${data.avatar_url}" alt="profile_pic"/>
//                  </div>
//
//    </div>
//
//
//
//               `
//
//               document.body.innerHTML = markup;

              });

})

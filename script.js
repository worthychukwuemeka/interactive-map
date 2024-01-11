// Asynchronous function to fetch and display the current time of a location
async function getUser(place) {
  // Construct the API URL with the provided location and API key
  const api_url = `https://timezone.abstractapi.com/v1/current_time/?api_key=K57WESM2COG0&location=${place}`;
  
  // Fetch data from the API
  const response = await fetch(api_url);
  
  // Parse the response data as JSON
  const data = await response.json();
  
  // Extract the datetime and timezone abbreviation
  time = await data.datetime;
  document.getElementById("time").innerText = `${place}'s time = ${time} ${data.timezone_abbreviation}`;
}

// Iterate over all elements with class 'allPaths'
document.querySelectorAll(".allPaths").forEach(e => {
  // Set the class attribute to 'allPaths' and the specific id
  e.setAttribute('class', `allPaths ${e.id}`);
  
  // Add event listener for mouseover event
  e.addEventListener("mouseover", function () {
    // Update position of the 'name' element based on mouse coordinates
    window.onmousemove = function (j) {
      x = j.clientX;
      y = j.clientY;
      document.getElementById('name').style.top = y - 60 + 'px';
      document.getElementById('name').style.left = x + 10 + 'px';
    }
    
    // Change fill color of all elements with the same class to 'pink'
    const classes = e.className.baseVal.replace(/ /g, '.');
    document.querySelectorAll(`.${classes}`).forEach(country => {
      country.style.fill = "pink";
    });
    
    // Make the 'name' element visible and set its text content
    document.getElementById("name").style.opacity = 1;
    document.getElementById("namep").innerText = e.id;
  });
  
  // Add event listener for mouseleave event
  e.addEventListener("mouseleave", function () {
    // Change fill color of all elements with the same class back to '#ececec'
    const classes = e.className.baseVal.replace(/ /g, '.');
    document.querySelectorAll(`.${classes}`).forEach(country => {
      country.style.fill = "#ececec";
    });
    
    // Hide the 'name' element by setting its opacity to 0
    document.getElementById("name").style.opacity = 0;
  });
  
  // Add event listener for click event
  e.addEventListener("click", function () {
    // Trigger the getUser function with the id of the clicked element
    getUser(e.id);
  });
});

// The following code is commented out; it appears to be related to search functionality
// and can be uncommented and modified if needed.

// document.getElementById("searchBtn").addEventListener("click", function () {
//     country = document.getElementById("search").value
//     document.querySelectorAll(`.allPaths`).forEach(e => {
//         e.style.fill = "#ececec"
//     })
//     document.querySelectorAll(`#${country}`).forEach(e => {
//         e.style.fill = "red"
//     })
// })

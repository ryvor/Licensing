// Get the query string from the current URL
const queryString = window.location.search;

// Create a new URLSearchParams object with the query string
const params = new URLSearchParams(queryString);

// Get the value of a specific parameter
const paramValue = params.get('paramName');

console.log(paramValue);

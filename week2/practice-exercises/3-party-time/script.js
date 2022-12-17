
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
import fetch from 'node-fetch';



async function makeReservation() {
  
  

  const myBody = {
    "name" : "abel",
"numberOfPeople": 7
};

const response = await fetch('https://reservation100-sandbox.mxapps.io/rest-doc/api#/reservations/post_reservations', {
	method: 'post',
	body: JSON.stringify(myBody),
	headers: {'Content-Type': 'application/json'}
});
const data = await response.text();

console.log(data);


}

makeReservation();
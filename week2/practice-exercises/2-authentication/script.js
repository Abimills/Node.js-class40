
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */ 
// YWRtaW46aHZnWDhLbFZFYQ==
import fetch from "node-fetch";

async function printBooks() {
  // YOUR CODE GOES IN HERE
  try{

    const response = await fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books',
    {
      headers:{'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ=='}
      
    });
    
    console.log(response);
    }
catch(err){
  console.error(err);
}

  }

printBooks();
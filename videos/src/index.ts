import express from 'express';
import os from 'os';
const app = express();
const port = 3001; // default port to listen

app.use((request:any, response:any, next:any) => {
    response.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // HTTP 1.1.
    response.setHeader('Pragma', 'no-cache'); // HTTP 1.0.
    response.setHeader('Expires', '0'); // Proxies.
    response.setHeader('Referrer-Policy', 'strict-origin'); // Referer Policy, see: https://www.w3.org/TR/referrer-policy/#referrer-policies
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// define a route handler for the default home page
app.get( '/api/v1/videos/', ( req:any, res:any ) => {
    const jsonResponse:string = 'Returning All Videos on http://' + os.hostname;
    res.status(200).json({data: jsonResponse});
} );

app.get('*', (req:any, res:any) => {
    res.send("<h1>Invalid API path</h1>");
  });

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost` + `:` + port );
    console.log('--------------------------');
} );
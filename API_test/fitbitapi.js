var express = require('express');
var app = express();
var FitbitApiClient = require("fitbit-node");
var mongoose = require("mongoose");

const port = 4000;

// const credentials = {
//   client: {
//     id: "22D6BD",
//     secret: "fe317b417d5df993295b66370f27a9e3"
//   },
//   auth: {
//     //tokenHost: "https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22D6BD&redirect_uri=passmobile%3A%2F%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800"
//     tokenHost: "https://www.fitbit.com/login"
//   }
// };
//
// const oauth2 = require('simple-oauth2').create(credentials)
//
// app.get("/", (req, res) => {
//   const redirectUri = oauth2.authorizationCode.authorizeURL({
//     response_type:"code",
//     redirect_uri: "http://localhost:4000/callback",
//     state: "passmobile://"
//   });
//   res.redirect("");
// });
//
// app.get('/callback', (req, res) => {
//   console.log("fitbit-callback route invoked");
//   res.send("fitbit callback working")
// });

var Schema = mongoose.Schema;

var fitbitSchema = new Schema({
  user : {
    age : String,
    ambassador : Boolean,

  }
});

let client_id = "22D6BD" // include this code in the FitbitauthPath variable
let client_secret = "fe317b417d5df993295b66370f27a9e3"

const client = new FitbitApiClient({
	clientId: client_id,
	clientSecret: client_secret,
	apiVersion: '1.2' // 1.2 is the default
});

// redirect the user to the Fitbit authorization page
app.get("/", (req, res) => {
	// request access to the user's activity, heartrate, location, nutrion, profile, settings, sleep, social, and weight scopes
	res.redirect(client.getAuthorizeUrl('activity heartrate location nutrition profile settings sleep social weight', 'http://localhost:4000/callback'));
});

// handle the callback from the Fitbit authorization flow
app.get("/callback", (req, res) => {
	// exchange the authorization code we just received for an access token
	client.getAccessToken(req.query.code, 'http://localhost:4000/callback').then(result => {
		// use the access token to fetch the user's profile information
		client.get("/activities/apiSubscriptions/"+result.user.encodedId+".json", result.access_token, client_id, 'Bearer '+req.query.code).then(results => {
			res.send(results);
		}).catch(err => {
			res.status(err.status).send(err);
		});
 
	}).catch(err => {
		res.status(err.status).send(err);
	});
});

// <a href="httpss://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22CVMG&redirect_uri=https%3A%2F%2Flocalhost%2Ffitbit-api-javascript%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800">Login to Fitbit</a>


app.listen(port, () =>
  console.log(`Server started on port ${port}!`)
);

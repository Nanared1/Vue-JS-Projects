var express = require("express");
var app = express();
var request = require("request");
app.set('view engine', 'ejs');


const port = 3000;
var sm = [];
app.get("/", function(req, res){
  let url = "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000";
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);

      for(d in data){

        let keys = data[d]['title'] + ' ' + data[d]['keywords'];

        // data[d]['body'].replace(/&quot;/g, "")
        //  .replace(/&amp;/g, "")
        //  .replace(/&lt;/g, "")
        //  .replace(/&gt;/g, "")
        //  .replace(/&#039;/g, "");
        // console.log(data[d]);
        // console.log("\n\n");

        let searchWord = 'takeout';
        let n = keys.search(searchWord);
        data[d]['body'] = data[d]['body'].replace(/(\r\n\t|\n|\r\t)/gm, "");
        if(n > -1){
          console.log(data[d]);
          console.log('\n');
          //sm.push(data[d]);
        }

      }
    };
  });
});


app.listen(port, () => console.log(`Api test is running on port ${port}!`, sm));

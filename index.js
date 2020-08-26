const app = require("./app");
// specify port to run on
const port = 5000;
// listen in for requests on port
app.listen(port, function(){
  console.log(`Running on port ${port}`);
});

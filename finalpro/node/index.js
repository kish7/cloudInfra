
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


// function takeInp(callback){
readline.question(`What application do you want to open\n1. Jupyter Notebook\n2.Sonaqube\n3.Hadoop\n4.Apache Spark\n\nEnter option`, name => {
  console.log(`Hi ${name}!`)

  if(name == '1'){
  var open = require("open");
  open("10.88.4.177:8888", "firefox");
  }
  if(name == '2'){
    var open = require("open");
    open("10.88.4.177:8088", "firefox");
    }
    if(name == '3'){
      var open = require("open");
      open("10.88.4.177:9090", "firefox");
      }
      if(name == '4'){
        var open = require("open");
        open("10.88.4.177:8080", "firefox");
        }
  readline.close()

callback(callback);
})
// }


// takeInp(takeInp);


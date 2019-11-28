letters = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'];
// to get array of unduplicate random numbers
function getRandNum(n){
  var max = 26;
  var random = [];
  for(var i = 0;i<n ; i++){
      var temp = Math.floor(Math.random()*max);
      if(random.indexOf(temp) == -1){
          random.push(temp);
      }
      else
       i--;
  }
  return random ;
    
}

function event(){
   var type ;
   var target;
   var date;
   var time ;
}
var input = document.getElementById("num");
var gen = document.getElementById("gen");
var div2 = document.getElementsByClassName("div2")[0];
var div3 = document.getElementsByClassName("div3")[0];

// load
window.addEventListener("load",function(e){
   if(localStorage.getItem('loading') !== null){
    var obs = JSON.parse(localStorage.getItem('loading'));
    var ob = new event();
    ob.type = e.type ;
    ob.target = "index.html" ;
    ob.date = new Date().toLocaleDateString();
    ob.time = new Date().toLocaleTimeString();
    
    obs.loaded.push(ob);
    var jsonString = JSON.stringify(obs);
    localStorage.setItem('loading' , jsonString);
    console.log(jsonString);

   }
   else{
     var record = {
       'loaded' : []
     }
     var ob = new event();
     ob.type = e.type ;
     ob.target = "index.html" ;
     ob.date = new Date().toLocaleDateString();
     ob.time = new Date().toLocaleTimeString();
     record.loaded.push(ob);
     var jsonString = JSON.stringify(record);
     localStorage.setItem('loading' , jsonString);
     console.log(jsonString);

   }

});

//unload
window.addEventListener("unload",function(e){
  if(localStorage.getItem('unloading') !== null){
   var obs = JSON.parse(localStorage.getItem('unloading'));
   var ob = new event();
   ob.type = e.type ;
   ob.target = "out of website" ;
   ob.date = new Date().toLocaleDateString();
   ob.time = new Date().toLocaleTimeString();
   
   obs.unloaded.push(ob);
   var jsonString = JSON.stringify(obs);
   localStorage.setItem('unloading' , jsonString);
  

  }
  else{
    var record = {
      'unloaded' : []
    }
    var ob = new event();
    ob.type = e.type ;
    ob.target = "out of website" ;
    ob.date = new Date().toLocaleDateString();
    ob.time = new Date().toLocaleTimeString();
    record.unloaded.push(ob);
    var jsonString = JSON.stringify(record);
    localStorage.setItem('unloading' , jsonString);

  }

});

gen.addEventListener("click" , function(e){
  if(localStorage.getItem('gen') !== null){
    var obs = JSON.parse(localStorage.getItem('gen'));
    var ob = new event();
    ob.type = e.type ;
    ob.target = gen.value ;
    ob.date = new Date().toLocaleDateString();
    ob.time = new Date().toLocaleTimeString();
    
    obs.genrated.push(ob);
    var jsonString = JSON.stringify(obs);
    localStorage.setItem('gen' , jsonString);
    console.log(jsonString);
  }
  else{
    var records = {
      'genrated' : [] 
    }
    var ob = new event();
    ob.type = e.type ;
    ob.target = gen.value ;
    ob.date = new Date().toLocaleDateString();
    ob.time = new Date().toLocaleTimeString();
    records.genrated.push(ob);
    var jsonString = JSON.stringify(records);
    localStorage.setItem('gen' , jsonString);
    console.log(jsonString);

  }

  document.getElementsByTagName("img")[0].setAttribute("src" , "");
  document.getElementsByTagName("img")[0].style.width = "";
  document.getElementsByTagName("img")[0].style.height= "";
  div2.innerHTML = "";
  var numOfLetters = parseInt(input.value);
 
  if(numOfLetters <= 26 &&  numOfLetters >=0){
    var randomLetters = getRandNum(numOfLetters);
    for(var i=0;i<numOfLetters;i++)
    {
      
        var letter = document.createElement("button");
        letter.style.padding = "15px";
        letter.style.margin = "10px";
        var index = getRandNum(25,0);
        var text = document.createTextNode(letters[randomLetters[i]]);
        letter.appendChild(text);
        div2.appendChild(letter);
        letter.addEventListener('click',function(e){
          if(localStorage.getItem('letters') !== null){
            var obs = JSON.parse(localStorage.getItem('letters'));
            var ob = new event();
            ob.type = e.type ;
            ob.target = e.target.textContent ;
            ob.date = new Date().toLocaleDateString();
            ob.time = new Date().toLocaleTimeString();
            
            obs.letter.push(ob);
            var jsonString = JSON.stringify(obs);
            localStorage.setItem('letters' , jsonString);
            console.log(jsonString);
          }
          else{
            var record = {
              'letter' : [] 
            }
            var obj = new event();
            obj.type = e.type ;
            obj.target = e.target.textContent ;
            obj.date = new Date().toLocaleDateString();
            obj.time = new Date().toLocaleTimeString();
            record.letter.push(obj);
            var jsonString = JSON.stringify(record);
            localStorage.setItem('letters' , jsonString);
            console.log(jsonString);
        
          }
        
              
          var path = "images/" + e.target.textContent + ".jpg.webp" ;
          var image =  document.getElementsByTagName("img")[0];
          image.setAttribute("src" , path );
          image.style.width = "400px" ;
          image.style.height= "500px" ;
          image.style.marginLeft= "500px" ;

      });   
       
    }
  }
  else{
    alert("You Must Enter Number between 0 and 26 !!!");
  }
  

});

var interval = setInterval(function(){
  localStorage.clear();
  console.log("Local Stroge is cleared !!!");
} , 10000);



       


var count = 1;
function activatetheme(){ 
   
    var checkbox = document.getElementById("checkbox");
  var screen = document.getElementById("mainscreen");
    if(checkbox.checked == true){
    screen.style.background = "#212121";
    screen.style.color = "white";
    }
    else{
    screen.style.background = "white";
    screen.style.color = "black";    
    } 
}
function addcol(){
    var click = count++;
    
    var creationcol = document.createElement("div");
  
    creationcol.setAttribute("class","col-12 py-2 ripple")
    var createrefresh = document.createElement("i");
    createrefresh.setAttribute("class","fas fa-sync-alt position-absolute t-0 l-0 refresh");
     createrefresh.setAttribute("onclick","refresh(this)");
    creationcol.appendChild(createrefresh);
    
    

creationimg = document.createElement("img");
    if(click == 1){ 
       creationimg.style.backgroundColor="#fff"; creationimg.setAttribute("src","images/ironman.jpg");
        
       
                   
    }
    else if(click == 2){
    creationimg.setAttribute("src","images/camerica.jpg");
    }
    else if(click == 3){
        creationimg.setAttribute("src","images/thor.jpg"); 
    }
     else if(click == 4){
        creationimg.setAttribute("src","images/spiderman.jpg"); 
    }
     else if(click == 5){
        creationimg.setAttribute("src","images/hawkeyi.jpg"); 
    }
     else if(click == 6){
        creationimg.setAttribute("src","images/doctorstrange.jpg"); 
    }
     else if(click == 7){
        creationimg.setAttribute("src","images/hulk.jpg"); 
    }
     else if(click == 8){
        creationimg.setAttribute("src","images/blackpanther.jpg"); 
    }
     else if(click == 9){
        creationimg.setAttribute("src","images/antman.jpg"); 
    }
     else if(click == 10){
        creationimg.setAttribute("src","images/cmarvel.jpg"); 
           count=1;
    }
    else{
        
      
    }
    
  
    creationcol.appendChild(creationimg);
    creationimg.setAttribute("class","w-100");
    var row = document.getElementById("mainscreen");
    row.appendChild(creationcol);
    
   }
var cou=1;
function refresh(x){
    
    click = cou++;
    y = x.nextSibling;
   
   
    y.setAttribute("src","images/ironman.jpg"); 
    if(click == 1){ 
    }
    else if(click == 2){
     
       y.style.borderRadius="50%";
        y.setAttribute("src","images/camerica.jpg");
        y.style.borderRadius="0%";
    }
    else if(click == 3){
        y.setAttribute("src","images/hulk.jpg"); 
    }
     else if(click == 4){
        y.setAttribute("src","images/blackpanther.jpg"); 
    }
     else if(click == 5){
       y.setAttribute("src","images/spiderman.jpg"); 
    }
     else if(click == 6){
       y.setAttribute("src","images/cmarvel.jpg"); 
    }
     else if(click == 7){
        y.setAttribute("src","images/hawkeyi.jpg"); 
    }
     else if(click == 8){
        y.setAttribute("src","images/antman.jpg"); 
    }
     else if(click == 9){
        y.setAttribute("src","images/thor.jpg"); 
    }
     else if(click == 10){
       y.setAttribute("src","images/doctorstrange.jpg"); 
        cou=1;
    }
    else{
        
      
    }  
}

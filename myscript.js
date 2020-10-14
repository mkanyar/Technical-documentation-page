
// for (var i=0; i<querySelector("header").length){
// console.log()
// }
// var x=document.querySelector("header").innerHTML;
//     document.getElementById("title").innerHTML=x;


var headerNumber=document.getElementsByTagName("header").length;
   for(var i=0; i<headerNumber;i++){
   var hr=document.createElement('hr');
   document.getElementById("titles").appendChild(hr);
    var x=document.getElementsByTagName("header")[i].innerText;
    var id=x.replace(/\s+/g,"_");
    var li=document.createElement('li');
    var a= document.createElement('a');
    var title=document.createTextNode(x);
    a.appendChild(title);
    a.href="#"+id;
    a.className="nav-link";
    li.appendChild(a);
    document.getElementById("titles").appendChild(li);
     
    console.log(id);
    
   }



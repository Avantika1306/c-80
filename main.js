people_array=[];
function submit(){
    var display_array=[];
    for(var i=1; i<5; i++){
        var name=document.getElementById("person_"+i).value;
        people_array.push(name);
    }
    var len=people_array.length;
   for(var k=0; k<len; k++){
       display_array.push("<h4> name-"+ people_array[k]+"</h4>");
   } 
   document.getElementById("name with coma").innerHTML=display_array;
   var remove=display_array.join(" ");
   document.getElementById("name without comas").innerHTML=remove;
}

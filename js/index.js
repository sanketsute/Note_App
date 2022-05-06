
shownotes();
//createnotes
let add=document.getElementById("addbtn");
add.addEventListener("click",function(e){
    let addtxt=document.getElementById("addtxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }else{
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
addtxt.value="";
shownotes();

    
});
//show all Notes
function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
        
        
    }else{
        notesobj=JSON.parse(notes); 
        var html="";
    notesobj.forEach((element,index) => {
        let s=Number(index)+1;
        html+=`  <div class="card noteCard mx-3 my-3 xx" style="width: 18rem; display:inline-block">
                
        <div class="card-body">
        <h5>Note `+s+`</h5>
         
          <p class="card-text">${element}</p>
          <button id="`+index+`" onclick=deleteNotes(`+index+`) class="btn btn-primary"><i class="fa fa-solid fa-trash"></i></button>
        </div>
      </div>`;    
    });
    }
   
    if(notesobj.length!==0){
          document.getElementById("notes").innerHTML=html;
      }
      else{
        document.getElementById("notes").innerHTML="<h2>nothing to show</h2>";
      }
//deletenotes
}
function deleteNotes(i){
    let notes=localStorage.getItem("notes");
   
    if(notes==null){
        notesobj=[];
    }else{
     notesobj=JSON.parse(notes);
}
   notesobj.splice(i,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
    

}
let search= document.getElementById("searchtxt");
search.addEventListener("input",function(){
let inputval=search.value;
inputval=inputval.toLowerCase();
let noteCards = document.getElementsByClassName('noteCard');
Array.from(noteCards).forEach(function(element){
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputval)){
        element.style.display = "inline-block";
    }
    else{
        element.style.display = "none";
    }
    // console.log(cardTxt);
})

});
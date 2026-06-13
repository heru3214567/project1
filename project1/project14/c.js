const INPUTBOX = document.getElementById("input-box");
const LISTCONTAINER = document.getElementById("list-container");
function addt(){
    if(INPUTBOX.value===''){
      alart("write somthing");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=INPUTBOX.value;
        LISTCONTAINER.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    INPUTBOX.value="";
    save();
}
LISTCONTAINER.addEventListener("click", function(e){
    if(e.target.tagName==="LI" ){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);
function save(){
    localStorage.setItem("data",LISTCONTAINER.innerHTML);
}
function show(){
    LISTCONTAINER.innerHTML=localStorage.getItem("data");
}
show();

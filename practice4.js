let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let dlt=document.createElement("button");
    dlt.innerText="Delete";
    dlt.classList.add("delete");

    item.appendChild(dlt);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";});

    // ul.addEventListener("click",function(event){
    // if(event.target.nodeName==="Button"){
    //     let listItem=event.target.parentElement;
    //     listItem.remove();
    //     console.log("Deleted");
    // }
    // });
    ul.addEventListener("click", function (event) {
        if (event.target.nodeName === "BUTTON") {
            let listItem = event.target.parentElement;
            listItem.remove();
            console.log("Deleted");
        }
    });

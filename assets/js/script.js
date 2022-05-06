//DERS
// let text=document.getElementById("text")
// let textParent=text.parentElement.parentElement.parentElement
// console.log(text.parentElement.nextElementSibling.nextElementSibling);
// text.parentElement.parentElement.lastElementChild.style.color="red";
// console.log(text.parentElement.parentElement.lastElementChild.children);



// let input=document.getElementById("input");
// let ul=input.parentElement.nextElementSibling;
// input.addEventListener("keyup",function(e){
//     ul.innerHTML="";
//     if (e.keyCode==13) {
//         for (let index = 1; index <= input.value; index++) {
            
//             let li=document.createElement("li");
//             li.classList.add("list-group-item");
//             li.innerText=index;
//             ul.appendChild(li);
//         }
//         input.value="";
//     }
// })




// let input=document.getElementById("input");
// let ul=input.parentElement.nextElementSibling;
// ul.setAttribute("id","ulid")
// let link=document.getElementById("link");
// if (!link.hasAttribute("href")) {
//     link.setAttribute("href","https://google.com")
    
// }
// else{
//     alert("movcudddur")
// }

//PRACTICA

const showImage = () => {
    document.getElementById("btn").style.display ='block';
}

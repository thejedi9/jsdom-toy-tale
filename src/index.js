let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
   
   // this is AnJ start
   let toyListOl = document.querySelector("ol#toy-collection")

    fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(function(toyCollection){
      toyCollection.forEach(function(toyObject){
        turnToyObjToLi(toyObject)
      })
    function turnToyObjToLi(toyObj){
 
    let toyCardLi = document.createElement("div")
    toyCardLi.classList.add("card")

    let toyName = document.createElement("h2")
    toyName.innerText = `${toyObj.name}`

    let toyImage = document.createElement("Img")
    toyImage.innerText = `${toyObj.image}`

    let toyLikesP = document.createElement("P")
    toyLikesP.innerText = `${toyObj.likes} Likes`

    }
    
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

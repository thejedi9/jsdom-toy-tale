let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(function(toyCollection){
      toyCollection.forEach(function(toyObjectParameter){
        turnToyObjToLi(toyObjectParameter)
      })
    })
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// write your code here
// Global

const ramenMenu =document.querySelector("#ramen-menu");
const baseUrl = "http://localhost:3000";


//Fetchers
fetch(baseUrl + "/ramens")
 .then((res) => res.json())
 .then((ramensData) => renderRamens (ramensData));


 // render Functions

 function renderRamens(ramens){
   ramens.forEach((ramen) => {
     const img = document.createElement("img");
     img.addEventListener('click',updateRamen)
     img.details=ramen 
     img.src = ramen.image;
    ramenMenu.append (img);
   });
 }

function updateRamen(e){
  let ramen= e.target.details;
  const name= document.querySelector(".name");
  name.innertext=ramen.name;
  const image = document.querySelector(".detail-image");
  image.src = ramen.image;
  const restaurant = document.querySelector(".restaurant");
  restaurant.innertext= ramen.restaurant;
  const rating=  document.querySelector("#rating-display");
  rating.innertext=ramen.rating;
  const comment = document.querySelector("#comment-display");
  comment.innertext = ramen.comment;
} 


const ramenForm = document.querySelector("#new-ramen") 
ramenForm.addEventListener ("submit", createRamen)
 
// New Form

function createRamen(event){
  event.prevent.Default();
  const name = document.querySelector ("#new-name".value);
  const restaurant = document.querySelector ("#new-restaurant").value;
  const image = document.querySelector("#new-image").value;
  const rating =document.querySelector("#new-rating").value;
  const comment =document.querySelector("#new-comment").value;
  console.log(name,restaurant,image,rating,comment); 
  appendRamenImage(ramen);


 }

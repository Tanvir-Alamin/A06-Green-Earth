const getCategories = () => {
    const url = ("https://openapi.programming-hero.com/api/categories");
    fetch(url)
        .then(res => res.json())
        .then(data => createCategories(data.categories))

}
const loadData=(id)=>{
    const url = (`https://openapi.programming-hero.com/api/category/${id}`);
    fetch(url)
        .then(res => res.json())
        .then(data => descriptions(data.plants))
}

const descriptions = (details) => {
    const desId = document.getElementById("plantSector");
    desId.innerHTML = "";
   for(let detail of details){
     const makingCard = document.createElement("div");
    makingCard.innerHTML=`<div class="p-4 bg-white rounded-xl h-full w-65 space-y-2">
          <img class="w-[311px] h-[186px] object-cover rounded-lg mx-auto " src="${detail.image}" alt="">
          <h1 class="font-semibold">${detail.name}</h1>
          <p class="text-[#1F293780] text-[12px]">${detail.description}</p>
          <div class="flex justify-between items-center">
            <div class="text-[#15803D] bg-[#DCFCE7] font-semibold text-sm my-2 p-2 rounded-full">${detail.category}</div>
            <div class="font-semibold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${detail.price}</div>
          </div>
          <button class="btn bg-[#15803D] text-white text-sm font-semibold rounded-full w-full hover:scale-105 shadow-sm">Add to Cart</button>
        </div> `;
    desId.appendChild(makingCard)
   }

}

const createCategories = (categories) => {
    const categoriesID = document.getElementById("Categorie");
    categoriesID.innerHTML = "";
   for(let cData of categories){
     const makingCategories = document.createElement("div");
    makingCategories.innerHTML=` <div onclick="loadData(${cData.id})" class="text-[#1F2937]">${cData.category_name}</div>`;
    categoriesID.appendChild(makingCategories)
   }

}

getCategories()
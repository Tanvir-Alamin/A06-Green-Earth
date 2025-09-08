const getCategories = () => {
    const url = ("https://openapi.programming-hero.com/api/categories");
    fetch(url)
        .then(res => res.json())
        .then(data => createCategories(data.categories))

}
const createCategories = (categories) => {
    const categoriesID = document.getElementById("Categorie");
    categoriesID.innerHTML = "";
   for(let cData of categories){
     const makingCategories = document.createElement("div");
    makingCategories.innerHTML=` <div class="text-[#1F2937]">${cData.category_name}</div>`;
    categoriesID.appendChild(makingCategories)
   }



}
getCategories()
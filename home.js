const getCategories = () => {
    const url = ("https://openapi.programming-hero.com/api/categories");
    fetch(url)
        .then(res => res.json())
        .then(data => createCategories(data.categories))

}
const spinnerManager = (status) => {
    if (status === true) {
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("plantSector").classList.add("hidden")
    }
    else {
        document.getElementById("plantSector").classList.remove("hidden")
        document.getElementById("spinner").classList.add("hidden")

    }
}

const removerbtn = () => {
    const removeing = document.querySelectorAll(".removerbtn")
    for (let remover of removeing) {
        remover.classList.remove("active")
    }
}
const loadData = (id) => {
    spinnerManager(true)
    const url = (`https://openapi.programming-hero.com/api/category/${id}`);
    fetch(url)
        .then(res => res.json())
        .then(data => descriptions(data.plants))
    removefromall();
    removerbtn();
    const hoverEffect = document.getElementById(`btn-${id}`);
    hoverEffect.classList.add("active")


}

const descriptions = (details) => {

    const desId = document.getElementById("plantSector");
    desId.innerHTML = "";
    for (let detail of details) {
        const makingCard = document.createElement("div");
        makingCard.innerHTML = `<div class="p-4 bg-white rounded-xl h-full w-63 space-y-2">
          <img class="w-[311px] h-[186px] object-cover rounded-lg mx-auto " src="${detail.image}" alt="">
          <h1 onclick="loadPlantDetail(${detail.id})" class="font-semibold hover:cursor-pointer">${detail.name}</h1>
          <p class="text-[#1F293780] text-[12px]">${detail.description}</p>
          <div class="flex justify-between items-center">
            <div class="text-[#15803D] bg-[#DCFCE7] font-semibold text-sm my-2 p-2 rounded-full">${detail.category}</div>
            <div class="font-semibold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${detail.price}</div>
          </div>
          <button class="btn bg-[#15803D] text-white text-sm font-semibold rounded-full w-full hover:scale-105 shadow-sm">Add to Cart</button>
        </div> `;
        desId.appendChild(makingCard)

        spinnerManager(false)
    }

}

const createCategories = (categories) => {
    const categoriesID = document.getElementById("Categorie");
    categoriesID.innerHTML = "";
    for (let cData of categories) {
        const makingCategories = document.createElement("div");
        makingCategories.innerHTML = ` <div onclick="loadData(${cData.id})" class="text-[#1F2937] hover:bg-[#15803D] hover:text-white rounded-lg p-1 hover:cursor-pointer removerbtn" id="btn-${cData.id}">${cData.category_name}</div>`;
        categoriesID.appendChild(makingCategories)
    }

}
const removefromall = () => {
    const removeing = document.getElementById("showAll");
    removeing.classList.remove("active")
}

const addtoallbtn = () => {
    removerbtn();
    const getBtn = document.getElementById("showAll");
    getBtn.classList.add("active")
}


const showAll = () => {
    spinnerManager(true)
    const url = ("https://openapi.programming-hero.com/api/plants")
    fetch(url)
        .then(res => res.json())
        .then(data => loadAll(data.plants))


}
const loadAll = (all) => {

    const desId = document.getElementById("plantSector");
    desId.innerHTML = "";
    for (let info of all) {
        const makingCard = document.createElement("div");
        makingCard.innerHTML = `<div class="p-4 bg-white rounded-xl h-full w-63 space-y-2 shadow-md">
          <img class="w-[311px] h-[186px] object-cover rounded-lg mx-auto " src="${info.image}" alt="">
          <h1 onclick="loadPlantDetail(${info.id})" class="font-semibold hover:cursor-pointer">${info.name}</h1>
          <p class="text-[#1F293780] text-[12px]">${info.description}</p>
          <div class="flex justify-between items-center">
            <div class="text-[#15803D] bg-[#DCFCE7] font-semibold text-sm my-2 p-2 rounded-full">${info.category}</div>
            <div class="font-semibold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${info.price}</div>
          </div>
          <button class="btn bg-[#15803D] text-white text-sm font-semibold rounded-full w-full hover:scale-105 shadow-sm">Add to Cart</button>
        </div> `
        desId.appendChild(makingCard)

        addtoallbtn()
        spinnerManager(false)
    }

}

const loadPlantDetail = async (id) => {
    const url = (`https://openapi.programming-hero.com/api/plant/${id}`)
    const res = await fetch(url)
    const details = await res.json();
    displayModal(details.plants)
}

const displayModal = (word) => {
    console.log(word);
    const modelID = document.getElementById("modelHold");
    modelID.innerHTML = ` <h1 class="font-bold text-lg">${word.name}</h1>
      <img class="w-[311px] h-[186px] object-cover rounded-lg mx-auto " src="${word.image}" alt="">
      <p><span class="font-bold text-md">Category: </span>${word.category}</p>
      <p><span class="font-bold text-md">Price:<i class="fa-solid fa-bangladeshi-taka-sign"></i></span>${word.price}</p>
      <p><span class="font-bold text-sm">Description: </span>${word.description}</p>`
    document.getElementById("my_modal_1").showModal();

}



showAll();
getCategories();
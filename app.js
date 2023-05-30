'use strict';
let lastId = 1000;
const foodArr = [];

function Food(foodName, foodType, price) {
    this.id = 1000;
    this.Name = foodName;
    this.Type = foodType;
    this.price = price;
    this.uniqueID = function () {
        this.id = lastId++
    };

    this.uniqueID();
    foodArr.push(this);
}

Food.prototype.RenderData = function (elm) {
    const Table = document.getElementById("data");
    
        const row = document.createElement("tr");
        const cellId = document.createElement("td");
        const cellName = document.createElement("td");
        const CellType = document.createElement("td");
        const CellPrice = document.createElement("td");

        //add text
        cellId.textContent = `${elm.id}`;
        cellName.textContent = `${elm.Name}`;
        CellType.textContent = `${elm.Type}`;
        CellPrice.textContent = `${elm.price}`;
        //add text

        ///appending time ^_^   ////
        row.appendChild(cellId);
        row.appendChild(cellName);
        row.appendChild(CellType);
        row.appendChild(CellPrice);
        Table.appendChild(row);
        ///appending time ^_^   ////
}

const saveValues = document.getElementById("foodForm");

function handler(e) {
    e.preventDefault();
    let foodName = e.target.foodName.value;
    let foodType = e.target.foodType.value;
    let price = e.target.price.value;

    console.log(price, foodType, foodName);
    const newFood = new Food(foodName, foodType, price);
    newFood.RenderData(newFood);
};

saveValues.addEventListener('submit', handler)
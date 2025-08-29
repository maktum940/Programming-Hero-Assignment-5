//heart
const heartCountS1 = document.getElementById("heart-count-1");
let heartCountI1 = parseInt(heartCountS1.textContent);
const heartCountS2 = document.getElementById("heart-count-2");
let heartCountI2 = parseInt(heartCountS2.textContent);

const tempHeart1 = document.getElementById("heart-btn-1");
tempHeart1.addEventListener("click", function (){
    heartCountI1++;
    heartCountI2++;
    heartCountS1.textContent = heartCountI1;
    heartCountS2.textContent = heartCountI2;
});
const tempHeart2 = document.getElementById("heart-btn-2");
tempHeart2.addEventListener("click", function (){
    heartCountI1++;
    heartCountI2++;
    heartCountS1.textContent = heartCountI1;
    heartCountS2.textContent = heartCountI2;
});
const tempHeart3 = document.getElementById("heart-btn-3");
tempHeart3.addEventListener("click", function (){
    heartCountI1++;
    heartCountI2++;
    heartCountS1.textContent = heartCountI1;
    heartCountS2.textContent = heartCountI2;
});
const tempHeart4 = document.getElementById("heart-btn-4");
tempHeart4.addEventListener("click", function (){
    heartCountI1++;
    heartCountI2++;
    heartCountS1.textContent = heartCountI1;
    heartCountS2.textContent = heartCountI2;
});
const tempHeart5 = document.getElementById("heart-btn-5");
tempHeart5.addEventListener("click", function (){
    heartCountI1++;
    heartCountI2++;
    heartCountS1.textContent = heartCountI1;
    heartCountS2.textContent = heartCountI2;
});
const tempHeart6 = document.getElementById("heart-btn-6");
tempHeart6.addEventListener("click", function (){
    heartCountI1++;
    heartCountI2++;
    heartCountS1.textContent = heartCountI1;
    heartCountS2.textContent = heartCountI2;
});

// const toStoreInfo = document.getElementById("display");
// document.querySelector(".call-btn").addEventListener("click", function () {

//     const div = document.createElement("div");
//     div.innerHTML = `
//     <div class="history flex justify-between items-center my-5 mx-5 p-2 rounded bg-gray-50">
//         <div class="service-info">
//             <h4 class="font-bold">Fire Service Number</h4>
//             <p class="text-gray-400">999</p>
//         </div>
//         <div class="time-stamp">
//             <p class="text-gray-600">11:36:58 AM</p>
//         </div>
//     </div>
//     `;
//     toStoreInfo.appendChild(div);
// });

// document.getElementById("clear-btn").addEventListener("click", () => {
//     toStoreInfo.innerHTML = "";
// });
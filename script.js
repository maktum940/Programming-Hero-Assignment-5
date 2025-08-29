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

//copy-challenge
const tempCopyS1 = document.getElementById("copy-count-1");
const tempCopyS2 = document.getElementById("copy-count-2");
let copyCountI = parseInt(tempCopyS1.textContent);

const tempCopy1 = document.getElementById("copy-btn-1");
const tempCopy2 = document.getElementById("copy-btn-2");
const tempCopy3 = document.getElementById("copy-btn-3");
const tempCopy4 = document.getElementById("copy-btn-4");
const tempCopy5 = document.getElementById("copy-btn-5");
const tempCopy6 = document.getElementById("copy-btn-6");

const call1 = document.getElementById("call-num-1").innerText;
const call2 = document.getElementById("call-num-2").innerText;
const call3 = document.getElementById("call-num-3").innerText;
const call4 = document.getElementById("call-num-4").innerText;
const call5 = document.getElementById("call-num-5").innerText;
const call6 = document.getElementById("call-num-6").innerText;

tempCopy1.addEventListener("click", function(){
    copyCountI++;
    tempCopyS1.textContent = copyCountI;
    tempCopyS2.textContent = copyCountI;
    call1.select;
    navigator.clipboard.writeText(call1);
    alert("Copied the text: " + call1);
});
tempCopy2.addEventListener("click", function(){
    copyCountI++;
    tempCopyS1.textContent = copyCountI;
    tempCopyS2.textContent = copyCountI;
    call2.select;
    navigator.clipboard.writeText(call2);
    alert("Copied the text: " + call2);
});
tempCopy3.addEventListener("click", function(){
    copyCountI++;
    tempCopyS1.textContent = copyCountI;
    tempCopyS2.textContent = copyCountI;
    call3.select;
    navigator.clipboard.writeText(call3);
    alert("Copied the text: " + call3);
});
tempCopy4.addEventListener("click", function(){
    copyCountI++;
    tempCopyS1.textContent = copyCountI;
    tempCopyS2.textContent = copyCountI;
    call4.select;
    navigator.clipboard.writeText(call4);
    alert("Copied the text: " + call4);
});
tempCopy5.addEventListener("click", function(){
    copyCountI++;
    tempCopyS1.textContent = copyCountI;
    tempCopyS2.textContent = copyCountI;
    call5.select;
    navigator.clipboard.writeText(call5);
    alert("Copied the text: " + call5);
});
tempCopy6.addEventListener("click", function(){
    copyCountI++;
    tempCopyS1.textContent = copyCountI;
    tempCopyS2.textContent = copyCountI;
    call6.select;
    navigator.clipboard.writeText(call6);
    alert("Copied the text: " + call6);
});


// call
// const toStoreInfo = document.getElementById("display");

// const coinS1 = document.getElementById("coin-count-1");
// let coinI1 = parseInt(coinS1.textContent);
// const coinS2 = document.getElementById("coin-count-2");
// let coinI2 = parseInt(coinS2.textContent);

// document.getElementById("call-btn-2") || document.getElementById("call-btn-1").addEventListener("click", function () {
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
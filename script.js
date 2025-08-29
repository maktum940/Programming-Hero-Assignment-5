
const allInfo = [
    { title: "National Emergency Number", subtitle: "National Emergency", number: "999", tag: "All",  icon: "./assets/emergency.png" },
    { title: "Police Help Number", subtitle: "Police", number: "999", tag: "Police", icon: "./assets/police.png" },
    { title: "Fire Service Number", subtitle: "Fire Service", number: "999", tag: "Fire", icon: "./assets/fire-service.png" },
    { title: "Ambulance Service", subtitle: "Ambulance", number: "19994-999999", tag: "Health",  icon: "./assets/ambulance.png" },
    { title: "Women & Child Helpline", subtitle: "Women & Child Helpline", number: "109", tag: "Help", icon: "./assets/emergency.png" },
    { title: "Anti-Corruption Helpline", subtitle: "Anti-Corruption", number: "106", tag: "Govt.", icon: "./assets/emergency.png" },
    { title: "Electricity Helpline", subtitle: "Electricity Outage", number: "16216", tag: "Electricity", icon: "./assets/emergency.png" },
    { title: "Brac Helpline", subtitle: "Brac", number: "16445", tag: "NGO", icon: "./assets/emergency.png" },
    { title: "Bangladesh Railway Helpline ", subtitle: "Bangladesh Railway", number: "163", tag: "Travel", icon: "./assets/emergency.png" }
];

const individualCardInfo = document.getElementById("detail-info");
for(const data of allInfo){
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="flex flex-col bg-white h-[360px] rounded-[12px] shadow-md p-[32px]">
                <!-- icon and heart -->
                <div class="flex justify-between items-center">
                    <div class="flex justify-center items-center size-[60px] bg-[#FFE3E2] rounded-[16px]">
                        <img class="size-[32px]" src="${allInfo.icon}">
                    </div>
                    <i class="fa-regular fa-heart fa-xl"></i>
                </div>
                <!-- text info -->
                <div class="pt-[16px]">
                    <h1 class="font-bold text-2xl">${allInfo.title}</h1>
                    <p class="text-gray-500">${allInfo.subtitle}</p>
                </div>
                <!-- call info -->
                <div class="pt-[20px] ">
                    <h1 class="font-bold text-2xl">999</h1>
                    <div class="bg-gray-200 px-[16px] py-[6px] w-fit rounded-[100px]">
                        <p>All</p>
                    </div>
                </div>
                <!-- buttons -->
                <div class="flex py-[20px] gap-3">
                    <button class="w-1/2 border-1 border-gray-200 rounded-[8px] py-[10px]"><i
                            class="fa-regular fa-copy fa-lg"></i> Copy</button>
                    <button class="call-btn w-1/2 py-[10px] bg-[#00A63E] rounded-[8px]"><i class="fa-solid fa-phone"></i>
                        Call</button>
                </div>
            </div> 
`;
individualCardInfo.appendChild(div);
}

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
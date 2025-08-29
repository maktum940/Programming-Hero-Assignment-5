
const toStoreInfo = document.getElementById("display");

document.querySelector(".call-btn").addEventListener("click", function () {

    const div = document.createElement("div");
    div.innerHTML = `
    <div class="history flex justify-between items-center my-5 mx-5 p-2 rounded bg-gray-50">
        <div class="service-info">
            <h4 class="font-bold">Fire Service Number</h4>
            <p class="text-gray-400">999</p>
        </div>
        <div class="time-stamp">
            <p class="text-gray-600">11:36:58 AM</p>
        </div>
    </div>
    `;
    toStoreInfo.appendChild(div);
});

document.getElementById("clear-btn").addEventListener("click", () => {
    toStoreInfo.innerHTML = "";
});
const sideMenu = document.querySelector("aside");
const closeBtn = document.getElementById("close-btn");
const menuBtn = document.getElementById("menu-btn");

const darkMode = document.querySelector(".dark-mode");

menuBtn.onclick = function () {
  sideMenu.style.display = "block";
};
closeBtn.onclick = function () {
  sideMenu.style.display = "none";
};
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
  darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${
      order.status === "Active"
        ? "success"
        : order.status === "Declined"
        ? "danger"
        : order.status === "Pending"
        ? "warning"
        : "primary"
    }">${order.status}</td>
    <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});

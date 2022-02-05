let descriptionEl = document.getElementById("descriptionEl");
let expandIconEl = document.getElementById("expandIcon");
let collapsIconEl = document.getElementById("collapsIcon");
let contentExpand = () => {
    descriptionEl.classList.toggle("addingHeight");
    collapsIconEl.classList.add("d-flex", "flex-row", "justify-content-center");
    expandIconEl.classList.remove("d-flex")
    expandIconEl.classList.add("d-none")
}
expandIconEl.addEventListener("click", contentExpand);
let contentCollaps = () => {
    descriptionEl.classList.toggle("addingHeight");
    collapsIconEl.classList.toggle("d-flex");
    expandIconEl.classList.add("d-flex")
    expandIconEl.classList.remove("d-none")
}
collapsIconEl.addEventListener("click", contentCollaps)
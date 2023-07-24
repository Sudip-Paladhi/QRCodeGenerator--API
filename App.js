const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const img = document.querySelector("#img");

submit.addEventListener("click", () => {
    if (!input.value) {
        return alert("Enter text to generate QR code");
    }

    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`

    img.src = url;
    img.style.display = "block";
})
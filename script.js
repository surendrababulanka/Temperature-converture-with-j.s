const celsius = document.querySelector("#celsius"),
fahrenhiet = document.querySelector("#fahrenhiet");

window.addEventListener("load", () => celsius.focus());

celsius.addEventListener("input", () => {
    fahrenhiet.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
    if (!celsius.value) fahrenhiet.value = "";
}
);

fahrenhiet.addEventListener("input", () => {
    celsius.value = (((fahrenhiet.value - 32) * 5) / 9).toFixed(2);
    if (!fahrenhiet.value) celsius.value = "";
}
)
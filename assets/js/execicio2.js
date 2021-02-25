const myForm = document.getElementById('myForm');
console.log (myForm);

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Formulario");
});
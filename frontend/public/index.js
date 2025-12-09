document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const inputs = document.querySelectorAll(".formulario");
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        input.style.border = "2px solid red";
        valid = false;
      } else {
        input.style.border = "";
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Por favor completá todos los campos antes de enviar.");
    }
  });
});


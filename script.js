document.getElementById("sorteo-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;
  const correo = document.getElementById("correo").value;
  const folio = document.getElementById("folio").value;
  const mensaje = document.getElementById("mensaje");

  // Simulación de validación (aquí se conecta con Google Sheets en el futuro)
  if (folio.startsWith("OAX")) {
    mensaje.style.color = "green";
    mensaje.innerText = "Folio válido. Datos enviados correctamente.";
  } else {
    mensaje.style.color = "red";
    mensaje.innerText = "Folio inválido o ya usado.";
  }
});
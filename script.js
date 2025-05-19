document.getElementById("sorteo-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const folio = document.getElementById("folio").value.trim();
  const mensaje = document.getElementById("mensaje");

  mensaje.innerText = "Validando folio...";

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxV-nbWgMFD-aYrolkiOKGHBupooD8YVfGr2QIfDmY8i-8DezguuisrR9oZmQZ9K7Bj/exec", {
      method: "POST",
      body: new URLSearchParams({
        nombre,
        telefono,
        direccion,
        correo,
        folio
      })
    });

    const result = await response.text();

    if (result === "OK") {
      mensaje.style.color = "green";
      mensaje.innerText = "✅ Registro exitoso. ¡Gracias por participar!";
    } else if (result === "FOLIO_YA_USADO") {
      mensaje.style.color = "red";
      mensaje.innerText = "❌ Este folio ya fue utilizado.";
    } else if (result === "FOLIO_INVALIDO") {
      mensaje.style.color = "red";
      mensaje.innerText = "❌ El folio no existe o es inválido.";
    } else {
      mensaje.style.color = "red";
      mensaje.innerText = "❌ Error desconocido. Intenta nuevamente.";
    }
  } catch (error) {
    console.error("Error al enviar:", error);
    mensaje.style.color = "red";
    mensaje.innerText = "❌ Error de conexión. Verifica tu red.";
  }
});
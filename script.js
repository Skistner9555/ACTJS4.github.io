const body = document.body;
const constBotonModo = document.getElementById("BotonModo");

// Aqui ocurre la magia
constBotonModo.addEventListener("click", () => {body.classList.toggle("dark-mode");

// Verifica si el modo oscuro está activado
const isDarkMode = body.classList.contains("dark-mode");
  
// Actualiza el texto del botón y el emoji en función del modo
    if (isDarkMode) {constBotonModo.textContent = "🌞";
        H1.textContent="ESTAS EN EL MODO LAUTI";
        H2.textContent="NO TENES DERECHOS";
        H3.textContent="NO SI TE VEO EN LA NOCHE";
        nave.textContent="si, no, si, no";} 

    else {constBotonModo.textContent = "🌙";
        H1.textContent="ESTAS EN EL MODO LICHI";
        H2.textContent="TENES DERECHOS";
        H3.textContent="SI TE VEO EN LA NOCHE";
        nave.textContent="no, si, no, si"}});



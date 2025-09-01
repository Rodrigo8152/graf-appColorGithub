// Sliders
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

// Inputs numéricos
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

// Color picker
const colorPicker = document.getElementById("colorPicker");

// Recuadro y códigos
const colorBox = document.getElementById("colorBox");
const rgbCode = document.getElementById("rgbCode");
const hexCode = document.getElementById("hexCode");
const copyBtn = document.getElementById("copyBtn");

// Función para actualizar color desde sliders/inputs
function updateColor() {
  let r = parseInt(red.value);
  let g = parseInt(green.value);
  let b = parseInt(blue.value);

  // Sincronizar inputs numéricos
  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;

  // Color en RGB
  let rgbColor = `rgb(${r}, ${g}, ${b})`;
  colorBox.style.backgroundColor = rgbColor;
  rgbCode.textContent = rgbColor;

  // HEX
  let hex = "#" + 
    r.toString(16).padStart(2, "0") + 
    g.toString(16).padStart(2, "0") + 
    b.toString(16).padStart(2, "0");

  hex = hex.toUpperCase();
  hexCode.textContent = hex;

  // Sincronizar color picker
  colorPicker.value = hex;
}

// Función para actualizar sliders desde inputs numéricos
function updateFromInput() {
  let r = Math.min(255, Math.max(0, parseInt(redInput.value) || 0));
  let g = Math.min(255, Math.max(0, parseInt(greenInput.value) || 0));
  let b = Math.min(255, Math.max(0, parseInt(blueInput.value) || 0));

  red.value = r;
  green.value = g;
  blue.value = b;

  updateColor();
}

// Función para actualizar desde color picker
function updateFromPicker() {
  let hex = colorPicker.value;

  // Extraer valores RGB del HEX
  let r = parseInt(hex.substr(1,2), 16);
  let g = parseInt(hex.substr(3,2), 16);
  let b = parseInt(hex.substr(5,2), 16);

  // Actualizar sliders e inputs
  red.value = r;
  green.value = g;
  blue.value = b;
  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;

  updateColor();
}

// Copiar código al portapapeles
copyBtn.addEventListener("click", () => {
  let text = `RGB: ${rgbCode.textContent} | HEX: ${hexCode.textContent}`;
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = "✅ Copiado";
    setTimeout(() => copyBtn.textContent = "📋 Copiar Código", 1500);
  });
});

// Eventos sliders
red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);

// Eventos inputs numéricos
redInput.addEventListener("input", updateFromInput);
greenInput.addEventListener("input", updateFromInput);
blueInput.addEventListener("input", updateFromInput);

// Evento color picker
colorPicker.addEventListener("input", updateFromPicker);

// Inicializar
updateColor();

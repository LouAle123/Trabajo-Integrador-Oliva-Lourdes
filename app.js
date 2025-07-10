let items = []; //Vamos a guardar lo que escriben los usuarios en este array

const formulario = document.getElementById("formulario")
const input = document.getElementById("input-texto")
const lista = document.getElementById("lista")

const mostrarLista = () => {
  lista.innerHTML = items.map((item, index) => `
    <div class="tarjeta ${item.confirmado ? 'confirmada' : ''}" id="tarjeta-${index}">
      <p class="${item.confirmado ? 'tachado' : ''}">${item.texto}</p>
      <label>
        <input type="checkbox" class="check-confirmacion" ${item.confirmado ? 'checked' : ''} onchange="confirmarTarjeta(${index})">
        Confirmar
      </label>
    </div>
  `).join("");
};

function confirmarTarjeta(index) {
  items[index].confirmado = !items[index].confirmado;
  mostrarLista(); // Actualiza sin resetear
}


formulario.addEventListener("submit", (e) => {e.preventDefault();
    const texto = input.value.trim();
    if(texto === "") return;
    
    items.push({ texto, confirmado: false });
    input.value = "";
    mostrarLista();
})
const precioCompraInput = document.getElementById('precio-compra');
const utilidadInput = document.getElementById('utilidad');
const ivaInput = document.getElementById('iva');
const valorVentaSpan = document.getElementById('valor-venta');
const gananciaSpan = document.getElementById('ganancia');
const valorIvaSpan = document.getElementById('valor-iva');
const calcularButton = document.getElementById('calcular');

function limpiarCasillas() {
	document.getElementById("precio-compra").value = "";
	document.getElementById("utilidad").value = "";
	document.getElementById("iva").value = "";

	document.getElementById("valor-venta").innerHTML = "";
	document.getElementById("ganancia").innerHTML = "";
	document.getElementById("valor-iva").innerHTML = "";
}
	

calcularButton.addEventListener('click', () => {
	const precioCompra = parseFloat(precioCompraInput.value);
	const utilidad = parseFloat(utilidadInput.value);
	const iva = parseFloat(ivaInput.value);

	const valorVenta = precioCompra * (1 + ((utilidad+iva) / 100))
	const ganancia = precioCompra / 100 * (utilidad);
	const valorIva = precioCompra * (iva / 100);

	valorVentaSpan.textContent = valorVenta.toFixed(2);
	gananciaSpan.textContent = ganancia.toFixed(2);
	valorIvaSpan.textContent = valorIva.toFixed(2);
});

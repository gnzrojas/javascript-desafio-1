const precio = 400000

const precioSpan = document.querySelector("#precio-inicial");
precioSpan.innerHTML = precio


const cantidadSpan = document.querySelector('#cantidad')
const valorSpan = document.querySelector('#valor-total')

/*Botones */
const mas = document.querySelector('#mas')
const menos = document.querySelector('#menos')


/*Evento para aumento de cantidad */
mas.addEventListener('click', () => {
    cantidadSpan.innerHTML++
    valorSpan.innerHTML = (cantidad.innerHTML * precioSpan.innerHTML).toLocaleString()

})

/*Evento para disminuir cantidad */
menos.addEventListener('click', () => {
    cantidadSpan.innerHTML--
    valorSpan.innerHTML = (precioSpan.innerHTML * cantidad.innerHTML).toLocaleString()
})

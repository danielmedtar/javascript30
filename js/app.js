const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const ciudades = []

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => ciudades.push(...data))

function encuentraIguales(palabraIgual, ciudades) {
    return ciudades.filter(lugar => {
        const regex = new RegExp(palabraIgual, 'gi')
        return lugar.city.match(regex) || lugar.state.match(regex)
    })
}

function puntoNumeros(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

function mostrarIguales() {
    const arrayIguales = encuentraIguales(this.value, ciudades)
    const html = arrayIguales.map(lugar => {
        const regex = new RegExp(this.value, 'gi')

        const nombreCiudad = lugar.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const nombreEstado = lugar.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
        <li>
            <span className="name">${nombreCiudad}, ${nombreEstado}</span>
            <span className="population">${puntoNumeros(lugar.population)}</span>
        </li>
    `
    }).join('')
    sugerencias.innerHTML = html
}

const searchInput = document.querySelector('.search')
const sugerencias = document.querySelector('.suggestions')

searchInput.addEventListener('change', mostrarIguales)
searchInput.addEventListener('keyup', mostrarIguales)
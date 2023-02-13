const segundero = document.querySelector('.second-hand')
const minutero = document.querySelector('.min-hand')
const hora = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date()
    const horas = now.getHours()
    const minutos = now.getMinutes()
    const segundos = now.getSeconds()

    const horaDegrees = ((horas / 12) * 360) + 90
    const minutosDegrees = ((minutos / 60) * 360) + 90
    const segundosDegrees = ((segundos / 60) * 360) + 90

    hora.style.transform = `rotate(${horaDegrees}deg)`
    minutero.style.transform = `rotate(${minutosDegrees}deg)`
    segundero.style.transform = `rotate(${segundosDegrees}deg)`
}

setInterval(setDate, 1000)
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleActive);
});

function toggleOpen() {
    this.classList.toggle('open')
}

 function toggleActive(e) {
    console.log(e.propertyName);

    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}
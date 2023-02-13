const inputs = document.querySelectorAll('.controls input')

function controlar() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', controlar))
inputs.forEach(input => input.addEventListener('mousemove', controlar))
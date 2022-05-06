import { valida } from './validacao'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evt) => {
        valida(evt.target)
    })
})
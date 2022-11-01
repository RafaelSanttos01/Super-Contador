function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passos')
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        alert('[ERRO] Verifica os dados e tente novamente')
    }
    else {
        res.innerHTML = 'Contando'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1 ')
            p = 1

        }
        if (i < f) {
            for (let C = i; C <= f; C += p) {
                res.innerHTML += `${C} \u{1f449} `

            }
        } else {
            for (let C = i; C >= f; C -= p) {
                res.innerHTML += `${C} \u{1f449} `

            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}


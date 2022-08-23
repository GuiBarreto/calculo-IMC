function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    function recebeEventoForm (evento) {
        evento.preventDefault();

        let peso = form.querySelector('.peso')
        let altura = form.querySelector('.altura') 
        let seuImc = ( peso.value / (altura.value * altura.value) )     
        altura = Number(altura)
        peso = Number(peso)

        


        const classificacaoImc = classificacao(seuImc)
        function classificacao (seuImc) {
            if (seuImc >= 0 && seuImc <= 1.85) {
                return `<p>Seu IMC é ${seuImc.toFixed(2)}<br/> ABAIXO DO PESO</p>`
            } else if (seuImc >= 18.6 && seuImc <= 24.9) {
                return `<p>Seu IMC é ${seuImc.toFixed(2)}<br/> PESO IDEAL (PARABÉNS)</p>`
            } else if (seuImc >= 25.0 && seuImc <= 29.9) {
                return `<p>Seu IMC é ${seuImc.toFixed(2)}<br/> LEVEMENTE ACIMA DO PESO</p>`
            } else if (seuImc >= 30.0 && seuImc <= 34.9) {
                return `<p>Seu IMC é ${seuImc.toFixed(2)}<br/> OBESIDADE GRAU I</p>`
            } else if (seuImc >= 35.0&& seuImc <= 39.9) {
                return `<p>Seu IMC é ${seuImc.toFixed(2)}<br/> OBESIDADE GRAU II (SEVERA)</p>`
            } else if (seuImc > 40) {
                return `<p>Seu IMC é ${seuImc.toFixed(2)}<br/> OBESIDADE GRAU III (MÓRBIDA)</p>`
            } else {
                return `ERRO: Valor digitado inválido.</p>`
            }
        }
        
        
        resultado.innerHTML = `<p>${classificacaoImc}</p>`
        this.reset()
        
    }

    form.addEventListener('submit', recebeEventoForm)

}

meuEscopo()
function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
   
    const imc = []

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura') 
        const seuImc = ((altura.value * altura.value) / peso.value)     
        
        imc.push({
            peso: peso.value,
            altura: altura.value,
        })

        console.log(imc)

     

        resultado.innerHTML += `<p>seu IMC é ${seuImc.toFixed(2)}</p>`
        this.reset()
        
    }

    

    form.addEventListener('submit', recebeEventoForm)
    
    
}

meuEscopo()
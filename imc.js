function imc(){
    const formulário = document.getElementsByName("formulario")[0]
    const formados = new FormData(formulario)
    const paciente = {nome:formados.get("nome"),
        email:formados.get("email"),
        dataNasc:formados.get("nasc"),
        telefone:formados.get("tel"),
        sexo:document.querySelector('input[name=sexo]:checked').value,
        peso:formados.get("peso"),
        altura:formados.get("altura"),
        classificacao:"",
        calcularIMC(){
            if (this.altura > 3) this.altura=this.altura/2
            const imc = this.peso/this.altura**2;
            if (imc < 18.5 ) this.classificacao = "obesidade mórbida";
            if (imc >= 18.5 &&  imc < 25 ) this.classificacao = "saudável"
            if (imc >= 25 &&  imc < 30 ) this.classificacao = "sobrepeso"
            if (imc >= 30 &&  imc < 35 ) this.classificacao = "obesidade"
            if (imc >= 35 &&  imc < 40 ) this.classificacao = "obesidade Severa"
            if (imc >= 40 ) this.classificacao = "magreza"
            return imc.toFixed(2);
        
            
            
        },
        
    }
    console.log(paciente)
    console.log(paciente.calcularIMC())
    let resposta=document.getElementById('resposta');
    resposta.innerHTML="Seu IMC Ã© "+paciente.calcularIMC()+". " + "Sua classificacao de peso Ã© " + paciente.classificacao;
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique o ano e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var res = document.querySelector('div#res')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada. ${idade}`
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos genero masc com a idade ${idade} anos!`
            var img = document.querySelector('img#imagem')
            if (idade >= 0 && idade < 10){
                //criança
                img.src = 'CRIANÇAM.png'
            }else if (idade < 21){
                //jovem
                img.src = 'JOVEMM.png'
            }else if (idade < 50){
                //adulto
                img. src = 'ADULTOM.png'
            }else {
                //idoso
                img.src = 'IDOSOM.png'
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos genero feminino com a idade ${idade} anos!`
            var img = document.querySelector('img#imagem')
            if (idade >= 0 && idade < 10){
                //criança
                img.src = 'CRIANÇAF.png'
            }else if (idade < 21){
                //jovem
                img.src = 'JOVEMF.png'
            }else if (idade < 50){
                //adulto
                img. src = 'ADULTOF.png'
            }else {
                //idoso
                img.src = 'IDOSOF.png'
            }
        }
        
    }




}
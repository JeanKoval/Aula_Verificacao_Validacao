function encaminhar(){

    function limpar(){
         res.innerHTML = ''
    }
    
    let n1 = document.querySelector("#num1")
    let n2 = document.querySelector("#num2")
    let n3 = document.querySelector("#num3")
    let res = document.querySelector("#res")
    var img = document.querySelector('img#img')

    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let num3 = Number(n3.value)

    //console.log(`${num1}, ${num2} e ${num3}`)

    // res.innerHTML = ''

    if(num1 <= 0 || num2 <= 0 || num3 <= 0){
        alert(
            `   Possiveis erros: 
            -Ter deixado algum número em branco; 
            -Ter digitado um zero ou um número negativo;`
            )
    }else if(!(num1 < num2 + num3) || !(num2 < num1 + num2) || !(num3 < num1 + num2)){
        alert("Os dados informados não geram um triangulo válido!")
        }else{
            if((num1 == num2) && (num2 == num3)){
                limpar()
                res.innerHTML = ''
                res.innerHTML += "<p>Conforme as suas informações dos lados do triangulo, chegamos a conclusão que seu triangulo é do tipo EQUILÁTERO!!!.</p>"
                res.innerHTML += "Segue uma imagem de exemplo:"
                img.setAttribute('src', 'equilatero.png')

            }else if(((num1==num2)&&(num2!=num3)) || ((num1==num3)&&(num3!=num2)) || ((num2==num3)&&(num2!=num1))){
                    limpar()
                    res.innerHTML = ''
                    res.innerHTML += "<p>Conforme as suas informações dos lados do triangulo, chegamos a conclusão que seu triangulo é do tipo ISÓSCELES!!!.</p>"
                    res.innerHTML += "Segue uma imagem de exemplo: <br>"
                    img.setAttribute('src', 'isosceles.png')

                }else if((num1 != num2) && (num2 != num3)){
                    limpar()
                    res.innerHTML = ''
                    res.innerHTML += "<p>Conforme as suas informações dos lados do triangulo, chegamos a conclusão que seu triangulo é do tipo ESCALENO!!!.</p>"
                    res.innerHTML += "Segue uma imagem de exemplo: <br>"
                    img.setAttribute('src', 'escaleno.png')

                    }
        }

    res.appendChild(img)
    
    n1.value = '' // deixa o input zerado após adicionar
    n2.value = '' 
    n3.value = '' 
    n1.focus() // deixa o cursor no input

    
}
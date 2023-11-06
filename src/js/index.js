function sim(){
    document.getElementById("imagem").innerHTML = "<img src='src/imagens/então_ele_é.gif'>"
        return
}

function desviar(t){
    var btn = t
    btn.style.position = "absolute"
    btn.style.bottom = geraposiçao(10, 90)
    btn.style.left = geraposiçao(10, 90)
    }

function geraposiçao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}
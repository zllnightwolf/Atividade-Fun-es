let mercedes = 0;
let redbull = 0;
let ferrari = 0;
let msg = "";
function pergunta01() {
    mercedes++;
    atual = "O voto atual foi em Mercedes."
    msg = mercedes + " pessoas votaram em Mercedes e " + "<br>" + redbull + " pessoas votaram em Red Bull e " + ferrari + "<br>" + " pessoas votaram em Ferrari" + "<br>" + "votos totais: " + (mercedes + redbull + ferrari)

    document.getElementById("resul").innerHTML = msg;
    document.getElementById("msg").innerHTML = atual;
}
function pergunta02() {
    redbull++;
    atual = "O voto atual foi em Red Bull."
    msg = mercedes + " pessoas votaram em Mercedes e " + "<br>" + redbull + " pessoas votaram em Red Bull e " + ferrari + "<br>" + " pessoas votaram em Ferrari" + "<br>" + "votos totais: " + (mercedes + redbull + ferrari)

    document.getElementById("resul").innerHTML = msg;
    document.getElementById("msg").innerHTML = atual;
}
function pergunta03() {
    ferrari++;
    atual = "O voto atual foi em Ferrari."
    msg = mercedes + " pessoas votaram em Mercedes e " + "<br>" + redbull + " pessoas votaram em Red Bull e " + ferrari + "<br>" + " pessoas votaram em Ferrari" + "<br>" + "votos totais: " + (mercedes + redbull + ferrari)

    document.getElementById("resul").innerHTML = msg;
    document.getElementById("msg").innerHTML = atual;
}
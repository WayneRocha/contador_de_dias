function Pegardatas() {
    let data_inicio = document.getElementById('calendario__inicio').value;
    let data_fim = document.getElementById('calendario__fim').value;
    if (data_inicio && data_fim != "") {
        data_inicio = new Date(data_inicio);
        data_fim = new Date(data_fim);
        let dias = calculardias(data_inicio, data_fim);
        mostrardata(dias);
    }
}
function calculardias(di, df) {
    let d = 0;
    d = Math.abs((di - df) / 86400000);
    return d;
}
function mostrardata(d) {
    document.getElementById('dias').value = d + " Dias";
}
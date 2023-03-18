function tambah() {
    let frm = document.getElementById("kalkulator");
    let input1 = parseFloat(frm.number1.value);
    let input2 = parseFloat(frm.number2.value);
    let tam = input1 + input2;
    //    frm.tam.value = tam;
    alert("Hasil penambahan dari " + input1 + " + " + input2 + " = " + tam)

}
function kurang() {
    let frm = window.document.getElementById("kalkulator");
    let input1 = parseFloat(frm.number1.value);
    let input2 = parseFloat(frm.number2.value);
    let kur = input1 - input2;

    alert("Hasil pengurangan dari " + input1 + " - " + input2 + " = " + kur)

}
function kali() {
    let frm = window.document.getElementById("kalkulator");
    let input1 = parseFloat(frm.number1.value);
    let input2 = parseFloat(frm.number2.value);
    let kal = input1 * input2;

    alert("Hasil perkalian dari " + input1 + " x " +input2 + " = " + kal)

}
function bagi() {
    let frm = window.document.getElementById("kalkulator");
    let input1 = parseFloat(frm.number1.value);
    let input2 = parseFloat(frm.number2.value);
    let bag = input1 / input2;

    alert("Hasil pembagian dari " + input1 + " / " +input2 + " = " + bag)

}
function pangkat() {
    let frm = window.document.getElementById("kalkulator");
    let input1 = parseFloat(frm.number1.value);
    let input2 = parseFloat(frm.number2.value);
    let pkt = input1 ** input2;

    alert("Hasil pembagian dari " + input1 + " ^ " +input2 + " = " + pkt)

}
function sisaBagi() {
    let frm = window.document.getElementById("kalkulator");
    let input1 = parseFloat(frm.number1.value);
    let input2 = parseFloat(frm.number2.value);
    let sibag = input1 % input2;

    alert("Hasil sisa bagi dari " + input1 + " % " + input2 + " = " + sibag)

}
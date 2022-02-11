const inputBoy = document.getElementById("boy");
const inputKilo = document.getElementById("kilo");
const btn = document.getElementById("hesap");
let vki = document.getElementById("veri");





btn.addEventListener("click",hesap);

function hesap(eko) {
    // let veriBoy = 0;
    // let veriKilo = 0;
    let veriBoy = inputBoy.value;
    let veriKilo = inputKilo.value;
    
    vki.innerHTML = veriBoy * veriKilo;
    eko.preventDefault();


}
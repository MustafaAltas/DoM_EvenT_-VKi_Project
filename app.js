const inputBoy = document.getElementById("boy");
const inputKilo = document.getElementById("kilo");
const btn = document.getElementById("hesap");
let vki = document.getElementById("veri");

window.addEventListener("load", (event) => {
  document.getElementById("icerik").style.display = "none";
});

btn.addEventListener("click", yenilenme);
btn.addEventListener("click", hesap);

function yenilenme(event) {
  document.getElementById("icerik_başlık").innerHTML = " ";
  document.getElementById("icerik_bilgi").innerHTML = " ";
}

function hesap(event) {
  // let veriBoy = 0;
  // let veriKilo = 0;
  let veriBoy = inputBoy.value;
  let veriKilo = inputKilo.value;

  vki.innerHTML = (veriKilo / (veriBoy * veriBoy)).toPrecision(4);
  //toPrecision(4) belirtilen uzunlukta yazılmış bir sayı ile bir dize döndürür:

  if (+vki.innerHTML > 18.5 && +vki.innerHTML < 24.99) {
    document.getElementById("icerik").style.display = "grid";
    document
      .getElementById("icerik_başlık")
      .appendChild(document.createTextNode("Normal"));
    document
      .getElementById("icerik_bilgi")
      .appendChild(
        document.createTextNode(
          "Uzunluğunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz."
        )
      );
  } else if (+vki.innerHTML > 25 && +vki.innerHTML < 29.99) {
    document.getElementById("icerik").style.display = "grid";
    document
      .getElementById("icerik_başlık")
      .appendChild(document.createTextNode("Fazla Kilolu"));
    document
      .getElementById("icerik_bilgi")
      .appendChild(
        document.createTextNode(
          "Boyunuza göre vücut ağırlığınızın fazla olduğunu gösterir. Fazla kilolu olma durumu gerekli önlemler alınmadığı takdirde pek çok hastalık için risk faktörü olan obeziteye (şişmanlık) yol açar."
        )
      );
  } else if (+vki.innerHTML > 30 && +vki.innerHTML < 34.9) {
    document.getElementById("icerik").style.display = "grid";
    document
      .getElementById("icerik_başlık")
      .appendChild(document.createTextNode("Şişman (Obez) - I. Sınıf"));

    document
      .getElementById("icerik_bilgi")
      .appendChild(
        document.createTextNode(
          "Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz."
        )
      );
  } else if (+vki.innerHTML > 35 && +vki.innerHTML < 44.9) {
    document.getElementById("icerik").style.display = "grid";
    document
      .getElementById("icerik_başlık")
      .appendChild(document.createTextNode("Şişman (Obez) - II. Sınıf"));
    document
      .getElementById("icerik_bilgi")
      .appendChild(
        document.createTextNode(
          "Uzunluğunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz."
        )
      );
  } else if (+vki.innerHTML > 45) {
    document.getElementById("icerik").style.display = "grid";
    document
      .getElementById("icerik_başlık")
      .appendChild(
        document.createTextNode("Aşırı Şişman (Aşırı Obez) - III. Sınıf")
      );
    document
      .getElementById("icerik_bilgi")
      .appendChild(
        document.createTextNode(
          "Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz."
        )
      );
  }

  event.preventDefault();
}

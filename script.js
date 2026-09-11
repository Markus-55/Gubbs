function hideContact() {
  let hideContact = document.getElementById("hide-contact");

  if (hideContact.style.display === "block") {
    hideContact.style.display = "none";
  } else {
    hideContact.style.display = "block";
  }
}
       let citat = [
            "Fryser du?  Då kan du ställa dig i hörnet, där är det 90 grader.",
            "Vad kallar man en praktikant på McDonalds? – En nyburgare.",
            "Vad gör tandläkaren på lunchen? – Käkar.",
            "Varför blev du kirurg? – Bra snittlön.",
            

        ];

        function Joke() {
            let index = Math.floor(Math.random() * citat.length);

            document.getElementById("citat").textContent = citat[index];
        }
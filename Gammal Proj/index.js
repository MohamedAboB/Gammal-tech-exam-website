function setupModal(button, modal, closeBtn) {
    function openModal() {
      modal.classList.remove("hide");
    }
  
    function closeModal(e, clickedOutside) {
      if (clickedOutside) {
        if (e.target.classList.contains("modal-overlay")) {
          modal.classList.add("hide");
        }
      } else {
        modal.classList.add("hide");
      }
    }
  
    button.addEventListener("click", openModal);
    modal.addEventListener("click", (e) => closeModal(e, true));
    closeBtn.addEventListener("click", () => closeModal(null, false));
  }
  
  const buttonl = document.querySelector(".buttonL");
  const modall = document.querySelector(".modal-overlay.modalL");
  const closeBtnl = document.querySelector(".modal-overlay.modalL .close-modal-btnS");
  
  setupModal(buttonl, modall, closeBtnl);
  
  const button1 = document.querySelector(".button1");
  const modal1 = document.querySelector(".modal-overlay.modal1");
  const closeBtn1 = document.querySelector(".modal-overlay.modal1 .close-modal-btn");
  
  setupModal(button1, modal1, closeBtn1);
  
  const button2 = document.querySelector(".button2");
  const modal2 = document.querySelector(".modal-overlay.modal2");
  const closeBtn2 = document.querySelector(".modal-overlay.modal2 .close-modal-btn");
  
  setupModal(button2, modal2, closeBtn2);
  
  const button3 = document.querySelector(".button3");
  const modal3 = document.querySelector(".modal-overlay.modal3");
  const closeBtn3 = document.querySelector(".modal-overlay.modal3 .close-modal-btn");
  
  setupModal(button3, modal3, closeBtn3);
  
  const buttonr = document.querySelector(".buttonR");
  const modalr = document.querySelector(".modal-overlay.modalR");
  const closeBtnr = document.querySelector(".modal-overlay.modalR .close-modal-btn");
  
  setupModal(buttonr, modalr, closeBtnr);
  
  const buttone = document.querySelector(".buttonE");
  const modale = document.querySelector(".modal-overlay.modalE");
  const closeBtne = document.querySelector(".modal-overlay.modalE .close-modal-btn");
  
  setupModal(buttone, modale, closeBtne);
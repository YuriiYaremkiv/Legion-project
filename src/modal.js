(() => {
    let body = document.querySelector('body')
    let modal = document.querySelector('.modal')
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        if (modal.getAttribute('class') == 'modal') {
            body.style.overflow = 'hidden';
        }else{
            body.style.overflow = 'auto';
        }
    }
})();
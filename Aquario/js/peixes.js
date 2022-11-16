function inicialModal(modalID) {
    if (localStorage.fecharModal !== modalID) {
        const modal = document.getElementById(modalID)

        if (modal) {
            modal.classList.add("mostrar");
            modal.addEventListener("click", (e) => {
                if (e.target.id == modalID || e.target.className == 'fechar') {
                    modal.classList.remove('mostrar');
                    localStorage.fechaModal = modalID;
                }
            })
        }
    }
}

const mod = document.querySelector('.peixes-ag');
mod.addEventListener("click", () => inicialModal("modal"))
function inicialModal(modalID) {
    const modal = document.querySelector(modalID)

    if (modal) {
        modal.classList.add("mostrar");
        modal.addEventListener("click", (e) => {
            if (e.target.className == 'modal-container' || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        })
    }
}

window.onload = ()=> {
    const peixe = document.querySelector('#tetra-neon');
    peixe.addEventListener("click", () => inicialModal("#modal-neon"))
    const peixe2 = document.querySelector('#molenesia')
    peixe2.addEventListener("click", () => inicialModal("#modal-molonesia"))
}
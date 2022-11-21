function inicialModal(varModal) {
    const modal = document.querySelector(varModal)

    if (modal) {
        modal.classList.add("mostrar");
        modal.addEventListener("click", (e) => {
            if (e.target.className == 'modal-container mostrar' || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        })
    }
}

window.onload = ()=> {
    const peixead = document.querySelector('#tetra-neon');
    peixead.addEventListener("click", () => inicialModal("#modal-neon"))

    const peixe2ad = document.querySelector('#molenesia')
    peixe2ad.addEventListener("click", () => inicialModal("#modal-molinesia"))

    const peixe3ad = document.querySelector('#plati')
    peixe3ad.addEventListener("click", () => inicialModal("#modal-plati"))

    const peixe4ad = document.querySelector('#halfmoon')
    peixe4ad.addEventListener("click", () => inicialModal("#modal-moon"))
}
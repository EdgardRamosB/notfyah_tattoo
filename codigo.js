function abrirModal(imagen) {
    const modal = document.getElementById("modal");
    const imagenModal = document.getElementById("imagen-modal");
    modal.style.display = "flex"; // Muestra el modal
    imagenModal.src = imagen.src; // Establece la fuente de la imagen en el modal
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Oculta el modal
}
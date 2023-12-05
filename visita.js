let nome = document.getElementById("name");
let email = document.getElementById("email");
let telefone = document.getElementById("phone");
let data = document.getElementById("date");

function submitForm() {
    let enviar = nome.value || email.value || telefone.value || data.value;
    
    if (!enviar) {
        displayModal("Nenhum campo preenchido. Agendamento não foi realizado!");
    } else if (!validarNome(nome.value)) {
        displayModal("Nome incorreto!");
    } else if (!validarTelefone(telefone.value)) {
        displayModal("Número de Telefone incorreto!");
    } else {
        displayModal("Agendamento realizado com sucesso!");
        // Limpa os campos do formulário
        nome.value = "";
        email.value = "";
        telefone.value = "";
        data.value = "";
    }
}

function validarNome(valor) {
    // Verifica se o valor contém apenas letras
    return /^[A-Za-z]+$/.test(valor);
}

function validarTelefone(valor) {
    // Verifica se o valor contém apenas números
    return /^[0-9]+$/.test(valor);
}

function clearForm() {
    // Limpa os campos do formulário
    nome.value = "";
    email.value = "";
    telefone.value = "";
    data.value = "";
}

function displayModal(message) {
    let modal = document.getElementById("customModal");
    let modalContent = document.getElementById("modalContent");
    let closeModalBtn = document.getElementById("closeModalBtn");

    modal.style.display = "block";
    modalContent.innerHTML = `<p>${message}</p><button class="modal-btn" onclick="closeModal()">Fechar</button>`;
    closeModalBtn.onclick = closeModal;
}

function closeModal() {
    let modal = document.getElementById("customModal");
    modal.style.display = "none";
}

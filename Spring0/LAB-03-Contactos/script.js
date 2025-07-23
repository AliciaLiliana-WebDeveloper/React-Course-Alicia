// Primero veo que el DOM esté totalmente cargado
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const phoneInput = document.getElementById('phoneInput');
    const addContactButton = document.getElementById('addContactButton');
    const contactList = document.getElementById('contactList');

    // Mi función para crear un nuevo <li> con el contacto y el botón de eliminar
    function createContactElement(name, phone) {
        const li = document.createElement('li');
        li.textContent = `${name} - ${phone}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-btn');

        // Añadir evento al botón de eliminar
        deleteButton.addEventListener('click', () => {
            contactList.removeChild(li);
        });

        li.appendChild(deleteButton);
        return li;
    }

    // Evento al hacer clic en el botón "Agregar Contacto"
    addContactButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (name === '' || phone === '') {
            alert('Por favor, introduce tanto el nombre como el número de teléfono.');
            return;
        }

        const contactElement = createContactElement(name, phone);
        contactList.appendChild(contactElement);

        // Limpiar inputs después de agregar
        nameInput.value = '';
        phoneInput.value = '';
        nameInput.focus();
    });
});
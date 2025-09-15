
//OBTENGO LOS ELEMENTOS DE FROM Y TO
export const transfer = async () => {
	const from = document.querySelector('[data-id="dropdown-field-from"]');
	const to = document.querySelector('[data-id="dropdown-field-to"]');
	const amount = document.getElementById('amount');
    //ACCEDEMOS A LOS HIJOS DEL CHECK (DEL ELEMENTO SELECCIONADO) Y OBTENEMOS EL VALOR
	const balance = document.querySelector('[data-id="dropdown-field-from"] option:checked').dataset.balance;

    //LE DECIMOS QUE EL USER DEBA PONER UN MONTO
	if (amount.value.trim() === '') {
		alert('Debe ingresar un monto');
		amount.focus();
		return;
	}

    //LE DECIMOS QUE EL USER NO QUIERA TRASNFERIR MAS DEL BALANCE
	if (parseFloat(amount.value) > parseFloat(balance)) {
		alert('No tiene saldo suficiente');
		amount.focus();
		return;
	}

    //ES EL OBJETO CON EL "FROM, TO, AMOUNT, CURRENCY"
	const data = {
		from: from.value,
		to: to.value,
		amount: parseFloat(amount.value),
		currency: 'EUR'
	};

    //EL FETCH X DEFECTO USA UN GET ENTONCES LE DAMOS 
    //PARAMETROS PARA CAMBIAR EL MODO PAPRA POST
    //EL CORS ES PARA OCULTAR INFO A HACKERS
	fetch('http://localhost:3000/transfer', {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data),
	})
		.then(res => {
			res.json();
		})

        //
		.catch(err => {
			console.error("res.json() can't be parsed because fetch mode is no-cors")
		})
		.then(data => {
			amount.value = '';
		})
}
document.getElementById('transfer-button').addEventListener('click', transfer)
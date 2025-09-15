import { accountFormat, formatCurrency, translateToSpanish } from "./utils.js";

//OBTENGO LOS DROPDOWN DEL HTML
export async function createAccounts() {
	const data = await fetch('http://localhost:3000/accounts')
		.then(res => res.json())
		.then(data => data)
		.catch(err => console.error(err));
	const { accounts } = data;
	const selectFrom = document.querySelector('[data-id="dropdown-field-from"]');
	const selectTo = document.querySelector('[data-id="dropdown-field-to"]');

	selectFrom.innerHTML = '';
	selectTo.innerHTML = '';

    //ITERO SOBRE LOS ELEMENTOS
	accounts.forEach(account => {
		const option = document.createElement('option');
		option.value = account.accountNumber;

		option.textContent = account.accountNumber;
		option.dataset.type = account.accountType;
		option.dataset.balance = account.balance;
		option.dataset.currency = account.currency;

		selectFrom.appendChild(option);
		selectTo.appendChild(option.cloneNode(true));

        //AÑADO UN EVENT LISTENER SOBRE CADA UNO DE ELLOS: CHANGEACCOUNT CAMBIA EL VALOR Y 
        //EVITAMOS QUE UNA CUENTA QUE QUIERA TRANSFERIR AUTOMÁTICAMENTE AL HACER CLICK, SE CAMBIE LA 2DA 
		selectFrom.addEventListener('change', changeAccount);
		selectTo.addEventListener('change', changeAccount);
	}
	)
	changeAccount();
	createListOfAccountCards(accounts);
}

function changeAccount(event) {
	const selectFrom = document.querySelector('[data-id="dropdown-field-from"]');
	const selectTo = document.querySelector('[data-id="dropdown-field-to"]');

    //QUIERO Q EL INDICE DEL ELEMENTO SELECCIONADO DE LA SEGUNDA SEA EL CONTRARIO DEL 1RO
	if (!event) {
		selectTo.selectedIndex = Array.from(selectFrom.options).findIndex(option => option.value !== selectFrom.value);
		return
	}

	const opositeSelect = event.target === selectFrom ? selectTo : selectFrom;
	const selectedIndex = Array.from(event.target.options).findIndex(option => option.value !== event.target.value)
	opositeSelect.selectedIndex = selectedIndex;

	changeAccountCardsOrder(selectFrom, selectTo);

}

//OBTENEMOS EL LISTADO DE TARJETAS-> INSEERT BEFORE AGARRA Y METE EN 1ERA POSICION
function changeAccountCardsOrder(selectedFrom, selectedTo) {
	const accountsList = document.querySelector('.tiles');
	const accounts = Array.from(accountsList.children);
	const accountFrom = accounts.find(account => account.dataset.number === selectedFrom.value);
	const accountTo = accounts.find(account => account.dataset.number === selectedTo.value);
	accountsList.insertBefore(accountFrom, accountTo);
}


//CREAMOS LA LISTA DE TARJETAS
function createListOfAccountCards(accounts) {
	const accountsList = document.querySelector('.tiles');
	accountsList.innerHTML = '';
	accounts.forEach(account => {
		const card = createCard(account)
		accountsList.appendChild(card)
	});
}

function createCard(account) {
	const card = document.createElement('li');
	const header = document.createElement('header');
	const icon = document.createElement('i');
	const title = document.createElement('h3');
	const number = document.createElement('span');
	const balance = document.createElement('span');
	const type = document.createElement('span');


	card.classList.add('tile');
	card.dataset.number = account.accountNumber;

    //LE DECIMOS SI LA CUENTA ES TIPO SAVINGA METELE UN ICONO PUERQUITO Y SINO EL DE LA BILLETERA
	header.classList.add('tile-header');
	icon.classList.add('fas', account.accountType === 'savings' ? 'fa-piggy-bank' : 'fa-wallet');

    //PARA TRAERNOS LAS FUNCIONALIDADES QUE CAMBIAN EL FORMATO
	balance.textContent = formatCurrency(account.balance);
	number.textContent = accountFormat(account.accountNumber);
	type.textContent = translateToSpanish(account.accountType);

	title.appendChild(balance);
	title.appendChild(number);
	header.appendChild(icon);
	header.appendChild(title);
	card.appendChild(header);
	card.appendChild(type);
	return card
}

createAccounts()
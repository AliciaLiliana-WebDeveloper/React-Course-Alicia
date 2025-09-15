import { accountMask, formatCurrency, formatDateShort } from "./utils.js";

async function getTransaction(){
    const res = await fetch("http://localhost:3000/transactions")
    const data = await res.json

    const { transactions } = data
    const transactionsList = document.querySelector('.transfers');
    transactionsList.innerHTML = '';

    //NOS QUEDAMOS CON LA ÚLTIMA Y PENÚLTIMA TRANSACCIÓN (-2) Y LE DAMOS EL REVERSE 
    //PARA QUE EL ULTIMO QUEDE PRIMERO Y EL PENULTIMO SEGUNDO 
    transactions.slice(-2).reverse().forEach(transaction => {
        const transactionItem = document.createElement('li');
        transactionItem.classList.add('transfer');

        //AÑADIMOS LA CLASE DEL SECTION
        const transactionSection = document.createElement('section');
        transactionSection.classList.add('transfer-details');

        //AÑADIMOS LA CLASE DEL HEADER
        const transactionHeader = document.createElement('header');
        transactionHeader.classList.add('transfer-details-header');

        //OBTIENE LA CUENTA e importa la función
        const transactionFrom = document.createElement('h4');
        transactionFrom.textContent = `De: ${accountMask(transaction.from)}`;

        //AÑADIMOS LA CUENTA A LA QUE VA EL DINERO e importa la función
        const transactionTo = document.createElement('h4');
        transactionTo.textContent = `A: ${accountMask(transaction.to)}`;

        //AÑADIMOS EL FOOTER
        const transactionFooter = document.createElement('footer');
        transactionFooter.classList.add('transfer-details-footer');

        //COLOCAMOS H4 PARA EL MONTO DE LA TRANSACCIÓN e importa función
        const transactionAmount = document.createElement('h4');
        transactionAmount.textContent = `Monto: ${formatCurrency(transaction.amount)}`;

        //MOSTRAR LA FECHA DE LA TRANSACCIÓN e importa la función de hacerla corta
        const transactionDate = document.createElement('h4');
        transactionDate.textContent = `Fecha: ${formatDateShort(transaction.date)}}`;

        transactionHeader.appendChild(transactionFrom);
        transactionHeader.appendChild(transactionTo);
        transactionFooter.appendChild(transactionAmount);
        transactionFooter.appendChild(transactionDate);
        transactionSection.appendChild(transactionHeader);
        transactionSection.appendChild(transactionFooter);
        transactionItem.appendChild(transactionSection);
        transactionsList.appendChild(transactionItem);

    })
}
getTransaction()
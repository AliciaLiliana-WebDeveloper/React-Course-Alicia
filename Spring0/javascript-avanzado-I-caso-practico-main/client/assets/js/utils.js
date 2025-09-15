//PARA DARLE FORMATO DE EURO
export const formatCurrency = (value) => {
	return new Intl.NumberFormat('es-ES', {
		style: 'currency',
		currency: 'EUR'
	}).format(value);
}

//LE DA FORMATO DE FECHA CORTA
export const formatDateShort = (value) => {
	return new Intl.DateTimeFormat('es-ES', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	}).format(new Date(value));
}

//LE DA UNA MÁSCARA PARA QUE NO SE VEA TODA LA CUENTA BANCARIA 
// Y TENGA ASTERISCOS HASTA EL 5TO ELEMENTO
export const accountMask = (value) => {
	const mask = '**** **** **** **** $5';
	return value.replace(/(\w{2}\d{2})(\d{4})(\d{4})(\d{4})(\d{4})/, mask);
}

//TRADUCE A ESPAÑOL, SI HAY UN ELEMENTO QUE NO IDENTICIAMOS LO PONE IGUAL
export const translateToSpanish = (value) => {
	const translations = {
		'checking': 'Cuenta nómina',
		'savings': 'Cuenta de ahorro',
	}
	return translations[value] || value;
}

//LE DA FORMATO DE CUENTA PARA SEPARARLO Y QUE SE ENTIENDA
export const accountFormat = (value) => {
	return value.replace(/(\w{2}\d{2})(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4 $5');
}
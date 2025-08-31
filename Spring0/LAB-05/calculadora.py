"""calculadora.py
Funciones básicas: sumar, restar, multiplicar, dividir.
La función dividir lanza ValueError si se intenta dividir por 0.
"""

def add(a,b):
    return a + b

def substract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide (a, b):
    if b == 0:
        raise ValueError("No puedes dividir entre 0")
    return a / b

if __name__ == '__main__':
    print('Ejemplo: sumar(5,3)=', sumar(5,3))

function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos.';
    } else {
        const resultado = num1 + num2;
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
    }
}
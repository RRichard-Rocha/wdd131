const temperatura = document.querySelector('#temperatura');
const sensacaoTermica = document.querySelector('#sensacao');
const velocidadeVento = document.querySelector('#vento');
const temp = parseFloat(temperatura.textContent);
const vent = parseFloat(velocidadeVento.textContent);

sensacaoTermica.textContent = calcularSensacaoTermica(temp, vent);

function calcularSensacaoTermica(temp, vento)

 {
    if (temp <= 10 && vento > 4.8)
        {
        let sensacao = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(vento, 0.16)) + (0.3965 * temp * Math.pow(vento, 0.16));
        return sensacao.toFixed(1);
        }
    else
        {
        return "N/A";
        }
}
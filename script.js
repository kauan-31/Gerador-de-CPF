document.getElementById('generate-btn').addEventListener('click', generateCPF);

function generateCPF() {
    // 1. Gerar os 9 primeiros dígitos aleatórios
    let n = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));

    // 2. Calcular o primeiro dígito verificador
    let d1 = calculateDigit(n, 10);
    n.push(d1);

    // 3. Calcular o segundo dígito verificador
    let d2 = calculateDigit(n, 11);
    n.push(d2);

    // 4. Formatar e exibir
    const cpfFormatted = formatCPF(n);
    document.getElementById('cpf-result').value = cpfFormatted;
}

function calculateDigit(baseArray, multiplier) {
    let sum = 0;
    for (let i = 0; i < baseArray.length; i++) {
        sum += baseArray[i] * (multiplier - i);
    }
    
    let rest = (sum * 10) % 11;
    return rest === 10 ? 0 : rest;
}

function formatCPF(arr) {
    let s = arr.join('');
    return `${s.slice(0, 3)}.${s.slice(3, 6)}.${s.slice(6, 9)}-${s.slice(9, 11)}`;
}

// Gerar um ao carregar a página
generateCPF();
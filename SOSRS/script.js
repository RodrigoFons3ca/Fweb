document.getElementById('symptomForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let selectedSymptoms = [];
    const checkboxes = document.querySelectorAll('input[name="symptom"]:checked');
    checkboxes.forEach(function(checkbox) {
        selectedSymptoms.push(checkbox.value);
    });

    if (selectedSymptoms.length > 0) {
        let diseasePage = 'index.html'; // página inicial como fallback

        // Lógica para redirecionar para a página da doença correspondente
        if (selectedSymptoms.includes('febre-alta') && selectedSymptoms.includes('dor-muscular')) {
            diseasePage = 'dengue.html';
        } else if (selectedSymptoms.includes('febre-alta') && selectedSymptoms.includes('dor-na-lombar')) {
            diseasePage = 'hepatite.html';
        } else if (selectedSymptoms.includes('sangramentos-nas-fezes')) {
            diseasePage = 'diarreia.html';
        } else if (selectedSymptoms.includes('contracoes-musculares')) {
            diseasePage = 'tetano.html';
        } else if (selectedSymptoms.includes('dor-na-panturrilha') || selectedSymptoms.includes('dor-na-lombar')) {
            diseasePage = 'leptospirose.html';
        } else if (selectedSymptoms.includes('eritema') || selectedSymptoms.includes('hematoma')) {
            diseasePage = 'animais-peconhentos.html';
        }

        // Redirecionamento para a página da doença
        window.location.href = diseasePage;
    } else {
        alert('Por favor, selecione ao menos um sintoma.');
    }
});

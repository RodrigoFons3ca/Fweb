fetch('cursos.json')
    .then(response => response.json())
    .then(data => {
        for (const curso in data) {
            if (data.hasOwnProperty(curso)) {
                console.log(`Curso: ${curso}`);
                data[curso].forEach(aluno => {
                    console.log(`  Aluno: ${aluno}`);
                });
            }
        }
    })
    .catch(error => console.error('Erro ao ler o arquivo JSON:', error));


let participantes = [
    {
        nome: "Victor Batista",
        email: "victor@gmail.com",
        dataInscricao: new Date(2024, 1, 22, 19, 20),
        dataCheckIn: new Date(2024, 1, 25, 22, 20),
    },
    {
        nome: "Maria Silva",
        email: "maria@gmail.com",
        dataInscricao: new Date(2024, 1, 20, 14, 30),
        dataCheckIn: new Date(2024, 2, 24, 10, 45),
    },
    {
        nome: "João Oliveira",
        email: "joao@gmail.com",
        dataInscricao: new Date(2024, 1, 18, 9, 10),
        dataCheckIn: new Date(2024, 1, 23, 15, 20),
    },
    {
        nome: "Ana Santos",
        email: "ana@gmail.com",
        dataInscricao: new Date(2024, 2, 15, 16, 45),
        dataCheckIn: new Date(2024, 4, 21, 8, 0),
    },
    {
        nome: "Pedro Almeida",
        email: "pedro@gmail.com",
        dataInscricao: new Date(2024, 3, 10, 12, 0),
        dataCheckIn: new Date(2024, 3, 17, 18, 30),
    },
    {
        nome: "Mariana Costa",
        email: "mariana@gmail.com",
        dataInscricao: new Date(2024, 3, 8, 20, 15),
        dataCheckIn: new Date(2024, 3, 13, 9, 45),
    },
    {
        nome: "Rafael Oliveira",
        email: "rafael@gmail.com",
        dataInscricao: new Date(2024, 3, 5, 11, 30),
        dataCheckIn: new Date(2024, 3, 11, 17, 10),
    },
    {
        nome: "Carla Sousa",
        email: "carla@gmail.com",
        dataInscricao: new Date(2024, 3, 2, 18, 20),
        dataCheckIn: new Date(2024, 3, 7, 13, 15),
    },
    {
        nome: "Luís Santos",
        email: "luis@gmail.com",
        dataInscricao: new Date(2024, 3, 28, 10, 0),
        dataCheckIn: new Date(2024, 5, 3, 16, 50),
    },
    {
        nome: "Sofia Rodrigues",
        email: "sofia@gmail.com",
        dataInscricao: new Date(2024, 2, 25, 22, 45),
        dataCheckIn: new Date(2024, 3, 1, 11, 30),
    }
];

const criarNovoParticipante = (participante) =>{
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
    const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

    return `
        <tr>
            <td>
                <strong>
                    ${participante.nome}
                </strong>
                <br>
                 <small>
                     ${participante.email}
                </small>
            </td>
                
            <td>
                ${dataInscricao}
            </td>

            <td>
            ${dataCheckIn}
            </td>
        </tr>
    `
}

const atualizarLista = (participantes) => {
    let output = ""
    // estrutura de repetição - loop
    for(let participante of participantes){
        output = output + criarNovoParticipante (participante)
    }
    // substituir informação do HTML
    document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)
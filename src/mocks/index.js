import computador from '../assets/img/computador.png';
import atividadeFisica from '../assets/img/atividadeFisica.png';
import leitura from '../assets/img/leitura.png';
import musica from '../assets/img/musica.png';

const task = {
    cabecalho: {
        title: 'Native Tracker',
        description: 'Organize suas tarefas e visualize seus hábitos',
    },
    notas: {
        title: 'Minhas tarefas',
        itens: [
            {
                id: 1,
                nome: 'Estudar React Native',
                ico: leitura,
                status: true,
            },
            {
                id: 2,
                nome: 'Sonegar imposto',
                ico: computador,
                status: true,
            },
            {
                id: 3,
                nome: 'Correr 5km',
                ico: atividadeFisica,
                status: true,
            },
            {
                id: 4,
                nome: 'Praticar gaita',
                ico: musica,
                status: true,
            },
            {
                id: 5,
                nome: 'Comprar café na Amazon',
                ico: computador,
                status: true,
            },
        ]
    }
}

export default task

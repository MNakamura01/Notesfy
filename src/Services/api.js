export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Criar portifólio em inglês',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/testando123teste.png'
          },
          {
            id: 2,
            content: 'Disponibilizar todos os meus certificados no Drive',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/testando123teste.png'
          },
          {
            id: 3,
            content: 'Assistir How I Met Your Mother',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/testando123teste.png'
          },
          {
            id: 4,
            content: 'Assistir aula 12 de inglês',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/testando123teste.png'
          },
          {
            id: 5,
            content: 'Terminar planejamento financeiro',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/testando123teste.png'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Criando portifólio',
            labels: [],
            user: 'https://api.adorable.io/avatars/285/testando123teste.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: "Descobrindo novas api's para consumo",
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/testando123teste.png'
          },
          {
            id: 8,
            content: 'Descobrindo MongoDB com NodeJS',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/testando123teste.png'
          },
          {
            id: 9,
            content: 'Melhorar visual do portifólio',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Criação base do portifólio',
            labels: [],
          },
          {
            id: 6,
            content: 'Recriar clone do Pipefy',
            labels: [],
            user: 'https://api.adorable.io/avatars/285/testando123teste.png'
          },
          {
            id: 12,
            content: 'Descobrir e estudar ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Aprender cada dia uma coisa nova',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }
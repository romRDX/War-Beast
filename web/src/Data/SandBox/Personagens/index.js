import lobo from './lobo.png';

const icones = [
    { cam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHETTG6Xa-sm11JJymidNcBozJ9NY-dGU4j9jPMUJaX2LsuCTV&usqp=CAU'},
    { cam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3cMzEwLTPhC40kl5udSB-tYgasIpIkC5iwy12SuOarqiR0Un8'},
    { cam: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abbf6919-9f5e-4910-bdd2-e05ae8ac0ad8/ddbzsml-c4b3b50b-047e-4f99-a6e0-84b78921df92.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYmY2OTE5LTlmNWUtNDkxMC1iZGQyLWUwNWFlOGFjMGFkOFwvZGRienNtbC1jNGIzYjUwYi0wNDdlLTRmOTktYTZlMC04NGI3ODkyMWRmOTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bi-fkld32fIIvfyS0w1irZX9aJmlt0S2-Q-AJpF6msI'},
    { cam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc_Zx8xmGdaVMTK_DNKRkaJ7n8LVKdNq0iQP66_SGKE9YvKG5P&usqp=CAU'},
    { cam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTC5UIqfTnL3SASwu085kRxoTmM_zjoBxE7a-gTAccCLySZy6k7&usqp=CAU'},
    { cam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5sgpQhqitrJ_ylJWYz4a-nCHTjBouTZMkCMpYwXNGPgbpkNyV&usqp=CAU'},
    { cam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_ZB8P0_per2WkapIgSMbYRrgcG33V8Wn1Oh5mC3qA8hSuqSPp&usqp=CAU'},
    { cam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd4kfUX_zNyi5zpSSgEbntsXP50Pg6-_wBlo7H6HBAStTkBrH7&usqp=CAU'},
    { cam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwFRTPCk8FxQy6T462hclMZ4fgi57CQUwouyvgVZQLvqwTNg_B&usqp=CAU'},
    { cam: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA-zA9T4RQtPDM_0Lg3eny8OXEfWUl7z8O34a8XY4A5WJBSnfb&usqp=CAU'},

    { cam: ''},
    { cam: ''},
    { cam: ''},
    { cam: ''},
    { cam: ''},
    { cam: ''},
    { cam: ''},
    { cam: ''},
    { cam: ''},
];

export const personagens = [
    {
        id: 2536734,
        nome: 'Renekton',
        nivel: 10,
        classe: 'Crocodilo',
        atributos: {STR: 5, DEX: 4, CON: 4, INT: 1, TOU: 2, AGI: 3}, 
        habilidades: [
                { nome: 'Garras', mod: 1, custo: 50, tipo: 'ataque', icone: icones[0].cam},
                { nome: 'Mordida', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[1].cam},
                { nome: 'Corte', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[3].cam},
                { nome: 'Fúria', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[4].cam},
                { nome: 'Força da Natureza', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[5].cam},
                // { nome: 'Sangria', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[6].cam},
                // { nome: 'Rugido', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[7].cam},
                // { nome: 'Teste', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[8].cam},
                // { nome: 'Teste2', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[9].cam},
            ], 
        tracos: [
            { nome: 'regen', efeito: '', icone: icones[0].cam},
            { nome: 'sangriax', efeito: '', icone: icones[1].cam},
            { nome: 'sangria2', efeito: '', icone: icones[3].cam},
            { nome: 'sangria3', efeito: '', icone: icones[4].cam},
            { nome: 'sangria4', efeito: '', icone: icones[5].cam},
            { nome: 'sangria5', efeito: '', icone: icones[6].cam},
            { nome: 'sangria6', efeito: '', icone: icones[7].cam},
            { nome: 'sangria7', efeito: '', icone: icones[8].cam},
            { nome: 'sangria8', efeito: '', icone: icones[9].cam},
        ],
        items: [
            { nome: 'item1', efeito: '', icone: icones[0].cam},
            { nome: 'item2', efeito: '', icone: icones[1].cam},
            { nome: 'item3', efeito: '', icone: icones[3].cam},
            { nome: 'item4', efeito: '', icone: icones[4].cam},
            { nome: 'item5', efeito: '', icone: icones[5].cam},
            { nome: 'item6', efeito: '', icone: icones[6].cam},
            { nome: 'item7', efeito: '', icone: icones[7].cam},
            { nome: 'item8', efeito: '', icone: icones[8].cam},
            { nome: 'item9', efeito: '', icone: icones[9].cam},
        ],
        especial: { nome: 'especial', tipo: 'fortalecimento', mod: 1.4, efeito: ''},
        modelo: icones[2].cam,
        portrait: lobo
    },
];

export const personagens2 = [
    {
        id: 2536734,
        nome: 'Renektonxx',
        nivel: 10,
        classe: 'Crocodilo',
        atributos: {STR: 5, DEX: 4, CON: 4, INT: 1, TOU: 2, AGI: 3}, 
        habilidades: [
                { nome: 'Garras', mod: 1, custo: 50, tipo: 'ataque', icone: icones[0].cam},
                { nome: 'Mordida', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[1].cam},
                { nome: 'Corte', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[3].cam},
                { nome: 'Fúria', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[4].cam},
                { nome: 'Força da Natureza', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[5].cam},
                // { nome: 'Sangria', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[6].cam},
                // { nome: 'Rugido', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[7].cam},
                // { nome: 'Teste', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[8].cam},
                // { nome: 'Teste2', mod: 1.2, custo: 50, tipo: 'ataque', icone: icones[9].cam},
            ], 
        tracos: [
            { nome: 'regen', efeito: '', icone: icones[0].cam},
            { nome: 'sangriax', efeito: '', icone: icones[1].cam},
            { nome: 'sangria2', efeito: '', icone: icones[3].cam},
            { nome: 'sangria3', efeito: '', icone: icones[4].cam},
            { nome: 'sangria4', efeito: '', icone: icones[5].cam},
            { nome: 'sangria5', efeito: '', icone: icones[6].cam},
            { nome: 'sangria6', efeito: '', icone: icones[7].cam},
            { nome: 'sangria7', efeito: '', icone: icones[8].cam},
            { nome: 'sangria8', efeito: '', icone: icones[9].cam},
        ],
        items: [
            { nome: 'item1', efeito: '', icone: icones[0].cam},
            { nome: 'item2', efeito: '', icone: icones[1].cam},
            { nome: 'item3', efeito: '', icone: icones[3].cam},
            { nome: 'item4', efeito: '', icone: icones[4].cam},
            { nome: 'item5', efeito: '', icone: icones[5].cam},
            { nome: 'item6', efeito: '', icone: icones[6].cam},
            { nome: 'item7', efeito: '', icone: icones[7].cam},
            { nome: 'item8', efeito: '', icone: icones[8].cam},
            { nome: 'item9', efeito: '', icone: icones[9].cam},
        ],
        especial: { nome: 'especial', tipo: 'fortalecimento', mod: 1.4, efeito: ''},
        modelo: icones[2].cam,
        portrait: lobo
    },
];
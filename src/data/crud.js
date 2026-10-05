import {
    HardDrive,
    KeyRound,
    Layers3,
    List,
    PlusCircle,
    Server,
    SquarePen,
    Trash2,
} from 'lucide-react';

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista séries com api-key exposta.',
        color: 'purple',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista séries renderizadas no SSR.',
        color: 'gray',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista séries salvas no sessionStorage.',
        color: 'black',
        Icon: HardDrive,
    },
    {
        id: 4,
        method: 'FullStack',
        verb: 'Get',
        description: 'Lista séries via API Route - BackEnd Intermediário.',
        color: 'green',
        Icon: Layers3,
    },
];

export const crud = [
    {
        id: 1,
        method: 'Create',
        verb: 'Post',
        description: 'Cria uma nova série.',
        color: 'orange',
        Icon: PlusCircle,
    },
    {
        id: 2,
        method: 'Read',
        verb: 'Get',
        description: 'Retorna os detalhes de uma série específica.',
        color: 'blue',
        Icon: List,
    },
    {
        id: 3,
        method: 'Update',
        verb: 'Put',
        description: 'Atualiza os dados de uma série existente.',
        color: 'yellow',
        Icon: SquarePen,
    },
    {
        id: 4,
        method: 'Delete',
        verb: 'Delete',
        description: 'Remove uma série do sistema.',
        color: 'red',
        Icon: Trash2,
    },
];

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    grails,
    groovy,
    mts,
    fixme,
    blocklist,
    telegrambot,
    threejs,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'React Native Developer',
        icon: mobile,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'docker',
        icon: docker,
    },
    {
        name: 'groovy',
        icon: groovy,
    },
    {
        name: 'grails',
        icon: grails,
    },
];

const experiences = [
    {
        title: 'Fullstack developer',
        company_name: 'Mobile TeleSystems (MTS)',
        icon: mts,
        iconBg: '#383E56',
        date: 'Jan 2022 - Сurrent time',
        backStack: 'Groovy, Grails',
        frontStack: 'JavaScript, JQuery, Bootstrap, UI/UX framework Telerik Kendo UI, Webpack',
        dbms: 'PostgreSql',
        points: [
            'Development of the “State Address Register” module in the form of a plugin (reading data) + application (writing and reading data), integration of the plugin into the main application, parsing and automation of data loading;',
            'Refinement of the domain model and functionality (server part) of the "User Management" module, with subsequent integration into the main application; Development of the front part as a separate application;',
            'Improvement of the main application;',
            'Participation in code reviews;',
            'Participation in planning and documentation;',
        ],
    },
    {
        title: 'Trainee',
        company_name: 'Mobile TeleSystems (MTS)',
        icon: mts,
        iconBg: '#E6DEDD',
        date: 'Sep 2021 - Dec 2021',
        backStack: 'Groovy, Grails',
        frontStack: 'JavaScript, JQuery, Bootstrap, UI/UX framework Telerik Kendo UI',
        dbms: 'PostgreSql',
        points: [
            'Development of the "Production Calendar" module - a micro-project for the main application, the purpose of which was to assess the acquired knowledge/learning ability;',
        ],
    },
];

const projects = [
    {
        name: 'FIXME',
        description:
        'CRM for for a small repair business.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'typeScript',
                color: 'orange-text-gradient',
            },
            {
                name: 'redux',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: fixme,
        source_code_link: 'https://github.com/PsyStream/FixMeCrm/tree/master/frontend',
    },
    {
        name: 'Block list',
        description:
        'Fullstack extension for Google Chrome that blocks links.',
        tags: [
            {
                name: 'next',
                color: 'blue-text-gradient',
            },
            {
                name: 'postgreSql',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: blocklist,
        source_code_link: 'https://github.com/pwnmeplzthx/block-list',
    },
    {
        name: 'JavaScript Dance Gym',
        description:
        'Telegram bot for studying front-end technologies.',
        tags: [
            {
                name: 'javaScript',
                color: 'blue-text-gradient',
            },
            {
                name: 'nodejs',
                color: 'orange-text-gradient',
            },
            {
                name: 'grammy',
                color: 'pink-text-gradient',
            },
        ],
        image: telegrambot,
        source_code_link: 'https://github.com/pwnmeplzthx/javascript-telegram-bot',
    },
];

export {
    services, technologies, experiences, projects,
};

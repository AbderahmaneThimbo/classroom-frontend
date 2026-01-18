export const DEPARTMENTS = [
    'CS',
    'Math',
    'English'
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}));

export const MOCK_SUBJECTS = [
    {
        id: '1',
        name: 'Introduction to Computer Science',
        code: 'CS101',
        department: 'CS',
        description: 'An introductory course on computer science principles, algorithms, and programming.',
        createdAt: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Calculus I',
        code: 'MATH101',
        department: 'Math',
        description: 'Fundamental concepts of calculus, including limits, derivatives, and integrals.',
        createdAt: new Date().toISOString(),
    },
    {
        id: '3',
        name: 'English Literature',
        code: 'ENG101',
        department: 'English',
        description: 'A survey of English literature from the medieval period to the present.',
        createdAt: new Date().toISOString(),
    },
];
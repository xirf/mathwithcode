export default [
    { text: 'Panduan', link: '/guide/' },
    {
        text: 'Aritmatika',
        collapsed: false,
        items: [
            { text: 'Bilangan', link: '/arithmetic/numbers' },
            { text: 'Operasi Bilangan', link: '/arithmetic/operation-on-number' },
            { text: 'Faktor dan Kelipatan', link: '/arithmetic/factors' },
            { text: 'Persen', link: '/arithmetic/percent' },
        ]
    },
    {
        text: 'Aljabar',
        collapsed: false,
        items: [
            { text: 'Persamaan Linear', link: '/algebra/linear-equation' },            
        ]
    },
    {
        text: 'Aljabar Linear',
        collapsed: false,
        items: [
            { text: 'Transformasi Linear', link: '/linear-algebra/linear-transformation' },
            { text: 'Perkalikan Matriks', link: '/linear-algebra/matrix-multiplication' },
        ]
    },
    {
        text: 'Statistika',
        collapsed: false,
        items: [
            { text: 'Ukuran Letak', link: '/statistics/measures-concentration-dispersion' },
        ]
    }
]
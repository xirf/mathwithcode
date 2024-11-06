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
            { text: 'Fungsi', link: '/algebra/function' },
            { text: 'Persamaan Linear', link: '/algebra/linear-equation' },
            { text: 'Persamaan Kuadrat', link: '/algebra/quadratic-equation' },
        ]
    },
    {
        text: 'Aljabar Linear',
        collapsed: false,
        items: [
            { text: 'Transformasi Linear', link: '/linear-algebra/linear-transformation' },
            { text: 'Matriks', link: '/linear-algebra/matrix' },
            { text: 'Vektor', link: '/linear-algebra/vector' },
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
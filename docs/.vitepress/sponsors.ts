export interface Sponsor {
    url: string
    img: string
    name: string
    priority?: boolean
}

export interface SponsorData {
    special?: Sponsor[]
    platinum?: Sponsor[]
    gold?: Sponsor[]
    silver?: Sponsor[]
    bronze?: Sponsor[]
}

export default <SponsorData>{
    special: [
        {
            url: 'https://jamcoder.id',
            img: '/img/sponsors/jamcoder.jpg',
            name: 'Jamcoder',
            priority: true
        },
        {
            url: 'https://www.facebook.com/groups/programmerhandal',
            img: '/img/sponsors/imphnen.png',
            name: 'Ingin Menjadi Programmer Handal, Namun Enggan Ngoding',
            priority: true
        },
        {
            url: 'https://akiha.ru',
            img: '/img/sponsors/akiharu.jpg',
            name: 'Akiharu',
            priority: true
        },
    ],
}


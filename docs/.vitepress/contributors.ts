import type { DefaultTheme } from 'vitepress'

export interface Contributor {
    name: string
    avatar: string
}

export interface Contributors extends Partial<DefaultTheme.TeamMember> {
    avatar: string      // URL to the avatar image should be image
    name: string        // name of the contributor
    facebook?: string   // facebook username
    github?: string     // github username
    twitter?: string    // twitter username
    discord?: string    // discord username
    youtube?: string    // youtube username
    sponsor?: string    // sponsor / donation link (coffee, saweria, etc)
    title?: string      // title of the contributor
    org?: string        // organization name can be paired with orgLink
    orgLink?: string    // organization link, require org
    desc?: string       // description of the contributor
}

function createLinks(contributor: Contributors): Contributors {
    contributor.links = [ { icon: 'github', link: `https://github.com/${contributor.github}` } ]
    if (contributor.discord) contributor.links.push({ icon: 'discord', link: contributor.discord })
    if (contributor.youtube) contributor.links.push({ icon: 'youtube', link: `https://www.youtube.com/@${contributor.youtube}` })
    if (contributor.facebook) contributor.links.push({ icon: 'facebook', link: `https://www.facebook.com/${contributor.facebook}` })
    if (contributor.twitter) contributor.links.push({ icon: 'twitter', link: `https://twitter.com/${contributor.twitter}` })
    return contributor
}

// Please refer to https://vitepress.dev/reference/default-theme-team-page#vpteammembers for more information
const plainContributors: Contributors[] = [
    {
        avatar: 'https://github.com/xirf.png',
        name: 'Andika Pratama',
        github: 'xirf',
        twitter: 'xirfs',
        facebook: '0xirf',
        sponsor: 'https://trakteer.id/xirf',
        actionText: "Beri Dukungan",
        title: 'Project Lead',
        desc: 'Technology is my passion and dreaming about a better world with it and making it happen is a dream come true',
    },
    {
        avatar: 'https://github.com/smintfy.png',
        name: 'Smintfy',
        github: 'smintfy',
        twitter: 'smintfy',
    },
    {
        avatar: 'https://github.com/mininxd.png',
        name: 'Minin',
        github: 'mininxd',
    },
    {
        avatar: 'https://github.com/RafiHul.png',
        name: 'Rafi Hul',
        github: 'RafiHul',
    },
    {
        avatar: 'https://github.com/Rnov24.png',
        name: 'Rijal',
        github: 'Rnov24',
    },
    {
        avatar: 'https://github.com/ninoslat1.png',
        name: 'Benedict Ell Nino',
        github: 'ninoslat1',
    },
    {
        avatar: 'https://github.com/up2dul.png',
        name: 'Abdul Malik',
        github: 'up2dul',
    },
    {
        avatar: 'https://github.com/windofbay.png',
        name: 'MasBay',
        github: 'windofbay',
    },
]

const contributors = plainContributors.map(c => createLinks(c))
export default contributors

export interface MenuItem {
    title: string;
    description: string;
    href: string;
}
export const menuItems:MenuItem[] = [
    {
        title: 'About Us',
        description: 'Learn more about our company and our mission.',
        href: '#about',
    },
    {
        title: 'Our Services',
        description: 'Discover the services we offer to help you succeed.',
        href: '#services',
    },
    {
        title: 'Our Work',
        description: 'Explore our portfolio and see what we can do for you.',
        href: '#work',
    },
    {
        title: 'Contact Us',
        description: 'Get in touch with us for any inquiries or support.',
        href: '#contact',
    }
 ] as const; 

 export interface AboutText {
    title: string; 
    description: string;
    buttonText: string;
 }
 export const aboutText:AboutText = {
    title: 'LE BIG CHUNGUS EST SUS',
    description: 'We are a team of passionate professionals dedicated to delivering high-quality services and solutions to our clients. Our mission is to help businesses grow and succeed in the digital world by providing innovative and effective strategies tailored to their unique needs.',
    buttonText: 'Learn More'    
} as const;


export interface ServiceCardText {
    title: string;
    description: string;
}
export interface ServicesText {
    title: string;
    description: string;

    cards: ServiceCardText[];

    contactText: string; 
    buttonText: string;
    buttonLink: string; 
}
export const servicesText:ServicesText = {
    title: 'Services',
    description: 'Here is a few of the awesome Services we provide.',
    cards: [
        {
            title: 'DAPP Development',
            description: 'A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.'
        },
        {
            title: 'Web 3.0 Development',
            description: 'Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web.'
        },
        {
            title: 'Project Audit',
            description: 'A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld.'
        },
        {
            title: 'Hacking / RE',
            description: 'A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network.'
        },
        {
            title: 'Bot/Script Development',
            description: 'Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process.'
        }
    ],
    contactText: 'If you are interested in any of these services, please contact us via the contact form below. We will be happy to discuss your project and provide you with a quote.',
    buttonText: 'Contact Us',
    buttonLink: '#'
} as const;
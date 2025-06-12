// #region Text Navbar & Footer

export interface MenuItem {
    title: string;
    description: string;
    href: string;
}
export const menuItems:MenuItem[] = [
    {
        title: 'About Us',
        description: 'Learn more about our company and our mission.',
        href: '/#about',
    },
    {
        title: 'Our Services',
        description: 'Discover the services we offer to help you succeed.',
        href: '/#services',
    },
    {
        title: 'Our Work',
        description: 'Explore our portfolio and see what we can do for you.',
        href: '/#work',
    },
    {
        title: 'Contact Us',
        description: 'Get in touch with us for any inquiries or support.',
        href: '/#contact',
    }
 ] as const; 

 export interface FooterCategory {
    title: string; 
    texts: string[];
    links: string[];
    logos?: string[]; 
}
export interface FooterText {
    img: string; 
    description: string; 
    categories: FooterCategory[]; 
    rights: string; 
}
export const footerText:FooterText = {
    img: 'linkToSVG', 
    description: 'Welcome to YourService.io, where innovation meets reliability. Our mission is to empower developers and businesses with cutting-edge tools and services to seamlessly build, deploy, and scale robust applications. At YourService.io, we prioritize performance, scalability, and security, ensuring that your full-stack applications meet the highest standards.', 
    categories: [
        {
            title: 'PAGES', 
            texts: ['Features', 'Pricing', 'FAQ'], 
            links: ['#Features', '#Pricing', '#FAQ']
        }, 
        {
            title: 'SUPPORT', 
            texts: ['Request Feedback', 'Submit Bugs', 'Contact Us'], 
            links: ['#Request Feedback', '#Submit Bugs', '#Contact Us']
        }, 
        {
            title: 'LEGAL', 
            texts: ['Privacy Policy'], 
            links: ['#PrivacyPolicy'], 
        }, 
        {
            title: 'CONTACT', 
            texts: ['hello@email.chokbar'], 
            links: ['Twitter'],
            logos: ['./Link1', './LinkZ'] 

        }
    ], 
    rights: '© 2024 YourService.io All rights reserved.',

} as const; 

// #endregion

// #region Text Home Page


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
    buttonLink: '/#contact'
} as const;


export interface WorkCardText {
    img: string;
    title: string; 
    description: string; 
    link: string;
}
export interface WorkText {
    title: string; 
    description: string;
    cards: WorkCardText[];
}
export const workText:WorkText = {
    title: 'Our Work',
    description: 'Here is a few of the awesome projects we have worked on. We are proud of our work and we hope you will be too.',
    cards: [
        {
            img: 'https://picsum.photos/1080',
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: '#'
        },
        {
            img: 'https://picsum.photos/1080',
            title: 'Project 2',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: '#'
        },
        {
            img: 'https://picsum.photos/1080',
            title: 'Project 3',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            link: '#'
        },
        {
            img: 'https://picsum.photos/1080',
            title: 'Project 4',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            link: '#'
        }
    ]
} as const;


export interface ContactText {
    title: string; 
    description: string; 
    buttonText: string; 
}
export const contactText:ContactText = {
    title: 'Contact Us',
    description: 'If you have any questions or inquiries, please feel free to reach out to us. We are here to help you with your project and provide you with the best solutions.',
    buttonText: 'Send Message'
} as const;

// #endregion 

// #region Text About Page
export interface AboutDetailsText {
    title: string; 
    description: string; 
}
export const aboutDetailsText:AboutDetailsText = {
    title: 'About Us',
    description: 'We are a team of passionate professionals dedicated to delivering high-quality services and solutions to our clients. Our mission is to help businesses grow and succeed in the digital world by providing innovative and effective strategies tailored to their unique needs.',
} as const;

export interface TeamText {
    teamTitle: string;
    teamDescription: string;
    teamImgs: string[];
    teamNames: string[];
}
export const teamText:TeamText = {
    teamTitle: 'Meet Our Team',
    teamDescription: 'Our team is composed of experienced professionals with diverse backgrounds and expertise. We are committed to delivering the best results for our clients and ensuring their success in every project we undertake.',
    teamImgs: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
    ],
    teamNames: [
        'John Doe',
        'Jane Smith',
        'Alice Johnson'
    ]
} as const;
// #endregion


// #region Text projects
export interface ProjectTextSection {
    title: string; 
    description: string; 
    img: string; 
}
export interface ProjectText {
    title: string; 
    description: string;
    sections: ProjectTextSection[];
}


// #endregion
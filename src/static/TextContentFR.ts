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
export interface INavigationItem {
    text: string;
    href: string;
}

export const NAVIGATION_ITEMS: Array<INavigationItem> = [
    {text: "About", href: "/about"},
    {text: "Projects", href: "/projects"},
    // {text: "Posts", href: "/posts"},
    {text: "Photography", href: "/photos"},
];

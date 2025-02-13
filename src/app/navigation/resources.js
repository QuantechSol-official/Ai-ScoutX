import DualTableIcon from 'assets/dualicons/table.svg?react' // Make sure this path is correct
import WindowIcon from 'assets/nav-icons/bot.svg?react'; // Make sure this path is correct
import { NAV_TYPE_ROOT, NAV_TYPE_ITEM } from 'constants/app.constant';

const ROOT_RESOURCES = '/resources'; // Define ROOT_RESOURCES

const path = (root, item) => `${root}${item}`;

export const resources = {
    id: 'resources',
    type: NAV_TYPE_ROOT,
    path: '/resources',
    title: 'Resources',
    transKey: 'nav.resources.resources',
    Icon: DualTableIcon, // Or a more appropriate icon for resources
    childs: [
        {
            id: 'resources.documentation',
            path: path(ROOT_RESOURCES, '/documentation'),
            type: NAV_TYPE_ITEM,
            title: 'Documentation',
            transKey: 'nav.resources.documentation',
            Icon: WindowIcon, // Or a more appropriate icon
        },
        {
            id: 'resources.tutorials',
            path: path(ROOT_RESOURCES, '/tutorials'),
            type: NAV_TYPE_ITEM,
            title: 'Tutorials',
            transKey: 'nav.resources.tutorials',
            Icon: WindowIcon, // Or a more appropriate icon
        },
        {
            id: 'resources.bestPractices',
            path: path(ROOT_RESOURCES, '/best-practices'),
            type: NAV_TYPE_ITEM,
            title: 'Best Practices',
            transKey: 'nav.resources.bestPractices',
            Icon: WindowIcon, // Or a more appropriate icon
        },
        {
            id: 'resources.support',
            path: path(ROOT_RESOURCES, '/support'),
            type: NAV_TYPE_ITEM,
            title: 'Support',
            transKey: 'nav.resources.support',
            Icon: WindowIcon, // Or a more appropriate icon
        },
    ],
};
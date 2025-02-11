import AppsIcon from 'assets/dualicons/applications.svg?react'
import { HomeIcon } from '@heroicons/react/24/outline';
import BotIcon from 'assets/nav-icons/bot.svg?react'
import { NAV_TYPE_ROOT, NAV_TYPE_ITEM } from 'constants/app.constant'

const ROOT_REPORTS = '/reports'

const path = (root, item) => `${root}${item}`;

export const reporting = {
    id: 'apps',
    type: NAV_TYPE_ROOT,
    path: '/reports',
    title: 'Applications',
    transKey: 'nav.reports.reports',
    Icon: AppsIcon,
    childs: [
        {
            id: 'apps.chat',
            path: path(ROOT_REPORTS, '/listing'),
            type: NAV_TYPE_ITEM,
            title: 'Reports',
            transKey: 'nav.reports.listing',
            Icon: BotIcon,
        },
        {
            id: 'dashboards.reports',
            path: path(ROOT_REPORTS, '/create'),
            type: NAV_TYPE_ITEM,
            title: 'Create Report',
            transKey: 'nav.reports.create',
            Icon: HomeIcon,
        },
    ]
}

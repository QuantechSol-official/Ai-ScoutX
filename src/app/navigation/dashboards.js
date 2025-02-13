import DashboardsIcon from 'assets/dualicons/dashboards.svg?react'
import WindowIcon from 'assets/nav-icons/window.svg?react'
import { NAV_TYPE_ROOT, NAV_TYPE_ITEM } from 'constants/app.constant'

const ROOT_DASHBOARDS = '/dashboards'

const path = (root, item) => `${root}${item}`;

export const dashboards = {
    id: 'dashboards',
    type: NAV_TYPE_ROOT,
    path: '/dashboards',
    title: 'Dashboards',
    transKey: 'nav.dashboards.dashboards',
    Icon: DashboardsIcon,
    childs: [
        {
            id: 'dashboards.crm-analytics',
            path: path(ROOT_DASHBOARDS, '/overview'),
            type: NAV_TYPE_ITEM,
            title: 'Overview',
            transKey: 'nav.dashboards.overview',
            Icon: WindowIcon,
        },
        {
            id: 'dashboards.crm-analytics',
            path: path(ROOT_DASHBOARDS, '/quick-stats'),
            type: NAV_TYPE_ITEM,
            title: 'Quick Stats',
            transKey: 'nav.dashboards.quickStats',
            Icon: WindowIcon,
        },
        {
            id: 'dashboards.crm-analytics',
            path: path(ROOT_DASHBOARDS, '/recent-reports'),
            type: NAV_TYPE_ITEM,
            title: 'Recent Reports',
            transKey: 'nav.dashboards.recentReports',
            Icon: WindowIcon,
        }
    ]
}

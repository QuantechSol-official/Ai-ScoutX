import FormsIcon from 'assets/dualicons/forms.svg?react'
import { HomeIcon } from '@heroicons/react/24/outline';
import BotIcon from 'assets/nav-icons/bot.svg?react'
import { NAV_TYPE_ROOT, NAV_TYPE_ITEM } from 'constants/app.constant'

const ROOT_REPORTS = '/reports'

const path = (root, item) => `${root}${item}`;

export const reporting = {
    id: 'reporting',
    type: NAV_TYPE_ROOT,
    path: '/reports',
    title: 'Applications',
    transKey: 'nav.reports.reports',
    Icon: FormsIcon,
    childs: [
        {
            id: 'reporting.listing',
            path: path(ROOT_REPORTS, '/report-analytics'),
            type: NAV_TYPE_ITEM,
            title: 'Reports',
            transKey: 'nav.reports.listing',
            Icon: BotIcon,
        },
        {
            id: 'reporting.create',
            path: path(ROOT_REPORTS, '/create-report'),
            type: NAV_TYPE_ITEM,
            title: 'Create Report',
            transKey: 'nav.reports.create',
            Icon: HomeIcon,
        },
        {
            id: 'reporting.generatedReports',
            path: path(ROOT_REPORTS, '/generated-reports'),
            type: NAV_TYPE_ITEM,
            title: 'Generated Reports',
            transKey: 'nav.reports.generatedReports',
            Icon: HomeIcon,
        },
        {
            id: 'reporting.reportTemplates',
            path: path(ROOT_REPORTS, '/report-templates'),
            type: NAV_TYPE_ITEM,
            title: 'Report Templates',
            transKey: 'nav.reports.reportTemplates',
            Icon: HomeIcon,
        },
        {
            id: 'reporting.savedReports',
            path: path(ROOT_REPORTS, '/saved-reports'),
            type: NAV_TYPE_ITEM,
            title: 'Saved Reports',
            transKey: 'nav.reports.savedReports',
            Icon: HomeIcon,
        },
        {
            id: 'reporting.exportCenter',
            path: path(ROOT_REPORTS, '/export-center'),
            type: NAV_TYPE_ITEM,
            title: 'Export Center',
            transKey: 'nav.reports.exportCenter',
            Icon: HomeIcon,
        },
    ]
}

import PrototypesIcon from 'assets/dualicons/prototypes.svg?react'
import WindowIcon from 'assets/nav-icons/window.svg?react'
import { NAV_TYPE_ROOT, NAV_TYPE_ITEM } from 'constants/app.constant'

const ROOT_META_ADS = '/meta-ads'

const path = (root, item) => `${root}${item}`;

export const metaAds = {
    id: 'meta-ads',
    type: NAV_TYPE_ROOT,
    path: '/meta-ads',
    title: 'Meta Ads',
    transKey: 'nav.metaAds.metaAds',
    Icon: PrototypesIcon,
    childs: [
        {
            id: 'meta-ads.campaignOverview',
            path: path(ROOT_META_ADS, '/campaign-overview'),
            type: NAV_TYPE_ITEM,
            title: 'Campaign Overview',
            transKey: 'nav.metaAds.campaignOverview',
            Icon: WindowIcon,
        },
        {
            id: 'meta-ads.performance-metrics',
            path: path(ROOT_META_ADS, '/performance-metrics'),
            type: NAV_TYPE_ITEM,
            title: 'Performance Metrics',
            transKey: 'nav.metaAds.performanceMetrics',
            Icon: WindowIcon,
        },
        {
            id: 'meta-ads.competition-tracking',
            path: path(ROOT_META_ADS, '/audience-insights'),
            type: NAV_TYPE_ITEM,
            title: 'Audience Insights',
            transKey: 'nav.metaAds.audienceInsights',
            Icon: WindowIcon,
        },
        {
            id: 'meta-ads.trend-analysis',
            path: path(ROOT_META_ADS, '/budget-management'),
            type: NAV_TYPE_ITEM,
            title: 'Budget Management',
            transKey: 'nav.metaAds.budgetManagement',
            Icon: WindowIcon,
        }
    ]
}

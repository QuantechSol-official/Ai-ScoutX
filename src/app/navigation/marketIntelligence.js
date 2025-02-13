import AppsIcon from 'assets/dualicons/applications.svg?react'
import WindowIcon from 'assets/nav-icons/window.svg?react'
import { NAV_TYPE_ROOT, NAV_TYPE_ITEM } from 'constants/app.constant'

const ROOT_MARKET_INTELLIGENCE = '/market-intelligence'

const path = (root, item) => `${root}${item}`;

export const marketIntelligence = {
    id: 'market-intelligence',
    type: NAV_TYPE_ROOT,
    path: '/market-intelligence',
    title: 'Dashboards',
    transKey: 'nav.marketIntelligence.marketIntelligence',
    Icon: AppsIcon,
    childs: [
        {
            id: 'market-intelligence.product-analysis',
            path: path(ROOT_MARKET_INTELLIGENCE, '/product-analysis'),
            type: NAV_TYPE_ITEM,
            title: 'Product Analysis',
            transKey: 'nav.marketIntelligence.productAnalysis',
            Icon: WindowIcon,
        },
        {
            id: 'market-intelligence.market-validation',
            path: path(ROOT_MARKET_INTELLIGENCE, '/market-validation'),
            type: NAV_TYPE_ITEM,
            title: 'Quick Stats',
            transKey: 'nav.marketIntelligence.marketValidation',
            Icon: WindowIcon,
        },
        {
            id: 'market-intelligence.competition-tracking',
            path: path(ROOT_MARKET_INTELLIGENCE, '/competition-tracking'),
            type: NAV_TYPE_ITEM,
            title: 'Competition Tracking',
            transKey: 'nav.marketIntelligence.competitionTracking',
            Icon: WindowIcon,
        },
        {
            id: 'market-intelligence.trend-analysis',
            path: path(ROOT_MARKET_INTELLIGENCE, '/trend-analysis'),
            type: NAV_TYPE_ITEM,
            title: 'Trend Analysis',
            transKey: 'nav.marketIntelligence.trendAnalysis',
            Icon: WindowIcon,
        }
    ]
}

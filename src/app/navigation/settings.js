// Import Dependencies
import { UserIcon } from "@heroicons/react/24/outline";
// import { TbPalette } from "react-icons/tb";

// Local Imports
import SettingIcon from "assets/dualicons/setting.svg?react";
import { NAV_TYPE_ITEM } from "constants/app.constant";

// ----------------------------------------------------------------------

export const settings = {
    id: 'settings',
    type: NAV_TYPE_ITEM,
    path: '/settings',
    title: 'Settings',
    transKey: 'nav.settings.settings',
    Icon: SettingIcon,
    childs: [
        {
            id: 'general',
            type: NAV_TYPE_ITEM,
            path: '/settings/general',
            title: 'General',
            transKey: 'nav.settings.general',
            Icon: UserIcon,
        },
        // {
        //     id: 'appearance',
        //     type: NAV_TYPE_ITEM,
        //     path: '/settings/appearance',
        //     title: 'Appearance',
        //     transKey: 'nav.settings.appearance',
        //     Icon: TbPalette,
        // },
        {
            id: 'accountSettings',
            type: NAV_TYPE_ITEM,
            path: '/settings/account-settings', // Or whatever path you want
            title: 'Account Settings',
            transKey: 'nav.settings.accountSettings',
        },
        {
            id: 'preferences',
            type: NAV_TYPE_ITEM,
            path: '/settings/preferences', // Or whatever path you want
            title: 'Preferences',
            transKey: 'nav.settings.preferences',
        },
        {
            id: 'apiIntegration',
            type: NAV_TYPE_ITEM,
            path: '/settings/api-integration', // Or whatever path you want
            title: 'API Integration',
            transKey: 'nav.settings.apiIntegration',
        },
        {
            id: 'notifications',
            type: NAV_TYPE_ITEM,
            path: '/settings/notifications', // Or whatever path you want
            title: 'Notifications',
            transKey: 'nav.settings.notifications',
        }
    ]
}
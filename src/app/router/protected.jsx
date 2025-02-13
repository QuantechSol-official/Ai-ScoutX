// Import Dependencies
import { Navigate } from "react-router";

// Local Imports
import { AppLayout } from "app/layouts/AppLayout";
import { DynamicLayout } from "app/layouts/DynamicLayout";
import AuthGuard from "middleware/AuthGuard";

// ----------------------------------------------------------------------

const protectedRoutes = {
  id: "protected",
  Component: AuthGuard,
  children: [
    // The dynamic layout supports both the main layout and the sideblock.
    {
      Component: DynamicLayout,
      children: [
        {
          index: true,
          element: <Navigate to="/dashboards" />,
        },
        {
          path: "dashboards",
          children: [
            {
              index: true,
              element: <Navigate to="/dashboards/overview" />,
            },
            {
              path: "overview",
              lazy: async () => ({
                Component: (await import("app/pages/dashboards/overview"))
                  .default,
              }),
            },
            {
              path: "quick-stats",
              lazy: async () => ({
                Component: (await import("app/pages/dashboards/quick-stats"))
                  .default,
              }),
            },
            {
              path: "recent-reports",
              lazy: async () => ({
                Component: (await import("app/pages/dashboards/recent-reports"))
                  .default,
              }),
            } 
          ],
        },
        {
          path: "meta-ads",
          children: [
            {
              index: true,
              element: <Navigate to="/meta-ads/campaign-overview" />,
            },
            {
              path: "campaign-overview",
              lazy: async () => ({
                Component: (await import("app/pages/meta-ads/campaign-overview"))
                  .default,
              }),
            },
            {
              path: "performance-metrics",
              lazy: async () => ({
                Component: (await import("app/pages/meta-ads/performance-metrics"))
                  .default,
              }),
            },
            {
              path: "audience-insights",
              lazy: async () => ({
                Component: (await import("app/pages/meta-ads/audience-insights"))
                  .default,
              }),
            },
            {
              path: "budget-management",
              lazy: async () => ({
                Component: (await import("app/pages/meta-ads/budget-management"))
                  .default,
              }),
            } 
          ],
        },
        {
          path: "market-intelligence",
          children: [
            {
              index: true,
              element: <Navigate to="/market-intelligence/product-analysis" />,
            },
            {
              path: "product-analysis",
              lazy: async () => ({
                Component: (await import("app/pages/market-intelligence/product-analysis"))
                  .default,
              }),
            },
            {
              path: "market-validation",
              lazy: async () => ({
                Component: (await import("app/pages/market-intelligence/market-validation"))
                  .default,
              }),
            },
            {
              path: "competition-tracking",
              lazy: async () => ({
                Component: (await import("app/pages/market-intelligence/competition-tracking"))
                  .default,
              }),
            },
            {
              path: "trend-analysis",
              lazy: async () => ({
                Component: (await import("app/pages/market-intelligence/trend-analysis"))
                  .default,
              }),
            }
          ]
        },
        {
          path: "reports",
          children: [
            {
              index: true,
              element: <Navigate to="/reports/report-analytics" />,
            },
            {
              path: "report-analytics",
              lazy: async () => ({
                Component: (await import("app/pages/reports/report-analytics"))
                  .default,
              }),
            },
            {
              path: "create-report",
              lazy: async () => ({
                Component: (await import("app/pages/reports/create-report")).default,
              }),
            },
            {
              path: "generated-reports",
              lazy: async () => ({
                Component: (await import("app/pages/reports/generated-reports")).default,
              }),
            },
            {
              path: "report-templates",
              lazy: async () => ({
                Component: (await import("app/pages/reports/report-templates")).default,
              }),
            },
            {
              path: "saved-reports",
              lazy: async () => ({
                Component: (await import("app/pages/reports/saved-reports")).default,
              }),
            },
            {
              path: "export-center",
              lazy: async () => ({
                Component: (await import("app/pages/reports/export-center")).default,
              }),
            },
            
          ],
        },
        {
          path: "resources",
          children: [
            {
              index: true,
              element: <Navigate to="/resources/documentation" />,
            },
            {
              path: "documentation",
              lazy: async () => ({
                Component: (await import("app/pages/resources/documentation"))
                  .default,
              }),
            },
            {
              path: "tutorials",
              lazy: async () => ({
                Component: (await import("app/pages/resources/tutorials")).default,
              }),
            },
            {
              path: "best-practices",
              lazy: async () => ({
                Component: (await import("app/pages/resources/best-practices")).default,
              }),
            },
            {
              path: "support",
              lazy: async () => ({
                Component: (await import("app/pages/resources/support")).default,
              }),
            },
          ],
        },
      ],
    },
    // The app layout supports only the main layout. Avoid using it for other layouts.
    {
      Component: AppLayout,
      children: [
        {
          path: "settings",
          lazy: async () => ({
            Component: (await import("app/pages/settings/Layout")).default,
          }),
          children: [
            {
              index: true,
              element: <Navigate to="/settings/general" />,
            },
            {
              path: "general",
              lazy: async () => ({
                Component: (await import("app/pages/settings/sections/General"))
                  .default,
              }),
            },
            {
              path: "appearance",
              lazy: async () => ({
                Component: (
                  await import("app/pages/settings/sections/Appearance")
                ).default,
              }),
            },
            {
              path: "account-settings",
              lazy: async () => ({
                Component: (
                  await import("app/pages/settings/account-settings")
                ).default,
              }),
            },
            {
              path: "preferences",
              lazy: async () => ({
                Component: (
                  await import("app/pages/settings/preferences")
                ).default,
              }),
            },
            {
              path: "api-integration",
              lazy: async () => ({
                Component: (
                  await import("app/pages/settings/api-integration")
                ).default,
              }),
            },
            {
              path: "notifications",
              lazy: async () => ({
                Component: (
                  await import("app/pages/settings/notifications")
                ).default,
              }),
            },
          ],
        },
      ],
    },
  ],
};

export { protectedRoutes };

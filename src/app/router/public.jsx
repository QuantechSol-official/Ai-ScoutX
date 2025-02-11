const publicRoutes = {
  id: "public",
  children: [
    {
      path: "prototypes",
      children: [
        {
          path: "sign-in",
          children: [
            // {
            //   path: "sign-in-1",
            //   lazy: async () => ({
            //     Component: (await import("app/pages/prototypes/sign-in-1"))
            //       .default,
            //   }),
            // },
            // {
            //   path: "sign-in-2",
            //   lazy: async () => ({
            //     Component: (await import("app/pages/prototypes/sign-in-2"))
            //       .default,
            //   }),
            // },
          ],
        },
        // {
        //   path: "sign-up",
        //   children: [
        //     {
        //       path: "sign-up-1",
        //       lazy: async () => ({
        //         Component: (await import("app/pages/prototypes/sign-up-1"))
        //           .default,
        //       }),
        //     },
        //     {
        //       path: "sign-up-2",
        //       lazy: async () => ({
        //         Component: (await import("app/pages/prototypes/sign-up-2"))
        //           .default,
        //       }),
        //     },
        //   ],
        // },
      ],
    },
  ],
};

export { publicRoutes };

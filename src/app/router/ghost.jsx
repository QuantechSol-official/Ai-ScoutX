import GhostGuard from "middleware/GhostGuard";

const ghostRoutes = {
  id: "ghost",
  Component: GhostGuard,
  children: [
    {
      path: "login",
      lazy: async () => ({
        Component: (await import("app/pages/Auth/login")).default,
      }),
    },
    {
      path: "signup",
      lazy: async () => ({
        Component: (await import("app/pages/Auth/signup")).default,
      }),
    },
  ],
};

export { ghostRoutes };

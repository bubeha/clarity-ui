import { createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "app/layouts";
import { Landing } from "pages/landing/ui/Landing.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {
                    path: '/',
                    element: <Landing />,
                },
            ],
        },
    ],
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_skipActionErrorRevalidation: true,
            v7_partialHydration: true,
            v7_normalizeFormMethod: true,
        },
    }
);

export function Router() {
    return <RouterProvider router={router}/>;
}

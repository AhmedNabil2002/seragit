import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/app/components/RootLayout";
import { HomePage } from "@/app/components/HomePage";
import { ServicesPage } from "@/app/components/ServicesPage";
import { AboutPage } from "@/app/components/AboutPage";
import { ProjectsPage } from "@/app/components/ProjectsPage";
import { MEDProjectPage } from "@/app/components/MEDProjectPage";
import { NewsPage } from "@/app/components/NewsPage";
import { NotFound } from "@/app/components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "about", Component: AboutPage },
      { path: "projects", Component: ProjectsPage },
      { path: "projects/med", Component: MEDProjectPage },
      { path: "news", Component: NewsPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
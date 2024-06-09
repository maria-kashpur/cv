import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/App/Layout";
import Main from "../components/App/pages/main/Main";
import ContactsList from "../components/ContactsList/ContactsList";
import ProjectsPage from "../components/App/pages/projects/ProjectsPage";
import Project from "../components/Project/Project";
import PROJECTS from "../data/projectsData";
import ContactsPage from "../components/App/pages/contacts/ContactsPage";
import NotFound from "../components/App/pages/NotFound/NotFound";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Main /> },
      {},
      {
        path: "projects/",
        element: <ProjectsPage />,
        children: [
          {
            path: ":id",
            element: <Project />,
          },
        ],
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

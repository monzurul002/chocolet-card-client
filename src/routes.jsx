import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddCoffe from "./components/AddCoffe";
import UpdateInfo from "./components/UpdateInfo";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        loader: () => fetch('http://localhost:5000/coffes')
    },
    {
        path: "/addCoffe",
        element: <AddCoffe></AddCoffe>
    },
    {
        path: "/coffes/:id",
        element: <UpdateInfo></UpdateInfo>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffes/${params.id}`)
    }
])

export default router;
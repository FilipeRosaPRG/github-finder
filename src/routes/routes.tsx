import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage/HomePage';
import RepositoriesPage from '../pages/RepositoriesPage/RepositoriesPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/repositories/:username',
                element: <RepositoriesPage />,
            }

        ],
    }
]);

export default router;
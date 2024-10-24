import AxiosApi from "../../pages/Axios/AxiosApi";
import Home from "../../pages/Home/Home";
import Mui from "../../pages/MUI/Mui";

const route = [
    {
        name: 'Home',
        path: '/home',
        element: <Home/>,
        key: 'home'
    },
    {
        name: 'About',
        path: '/about',
        element: <AxiosApi/>,
        key: 'about'
    },
    {
        name: 'Mui',
        path: '/mui',
        element: <Mui/>,
        key: 'mui'
    }
];

export default route;
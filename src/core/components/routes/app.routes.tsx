import { Route, Routes } from 'react-router-dom';
import ThirdForm from '../../../features/form_third/third.page';
import HomePage from '../../../features/home/pages/home.page';
import FormAccessP from '../../../features/form_second/second.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path={'/HomePage'} element={<HomePage></HomePage>}></Route>
            <Route
                path={'FormAccessP'}
                element={<FormAccessP></FormAccessP>}
            ></Route>
            <Route
                path={'/ThirdForm'}
                element={<ThirdForm></ThirdForm>}
            ></Route>
            <Route path={'*'} element={<HomePage></HomePage>}></Route>
        </Routes>
    );
}

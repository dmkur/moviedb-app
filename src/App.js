import {MainLayout} from "./layouts";
import {Navigate, Route, Routes} from "react-router-dom";
import {GenresPage, MoviesPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/movies'}/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/movies/:id'} />
                <Route path={'/genres'} element={<GenresPage/>}/>
            </Route>
        </Routes>
    )
};

export {App};

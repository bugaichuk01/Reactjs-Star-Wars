import {BrowserRouter, Route, Routes} from "react-router-dom";
import routesConfig from "../../routes/routesConfig";
import Header from "../../components/header";
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.wrapper}>
            <BrowserRouter>
                <Header />
                <Routes>
                    {routesConfig.map((route, index) => (
                        <Route key={index} path={route.path} exact={route.exact} element={route.component}/>
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

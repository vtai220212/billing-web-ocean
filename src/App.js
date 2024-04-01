import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { route } from './route';
import { Fragment } from 'react';
import DefaultComponent from './components/DefaultComponents/DefaultComponent';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {route.map((route) => {
                        const Page = route.page;
                        const Layout = route.isShowHeader
                            ? DefaultComponent
                            : Fragment;
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;

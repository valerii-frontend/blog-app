import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes,privateRoutes} from "../router";

const AppRouter = () => {
    const isAuth = true;


    return (
        <>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map(page=> {
                            return <Route path={page.path}
                                          element={page.component}
                                          exact={page.exact}/>;
                        }
                    )}

                </Routes>
                :
                <Routes>
                    {publicRoutes.map(page=> {
                            return <Route path={page.path}
                                          element={page.component}
                                          exact={page.exact}/>;
                        }
                    )}

                </Routes>
            }
       </>

    );
};

export default AppRouter;
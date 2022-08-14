import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes,privateRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {

    const {isAuth,setIsAuth}= useContext(AuthContext);

    return (
        <>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map(page=> {
                            return <Route key={page.path} path={page.path}
                                          element={page.component}
                                          exact={page.exact}/>;
                        }
                    )}

                </Routes>
                :
                <Routes>
                    {publicRoutes.map(page=> {
                            return <Route key={page.path} path={page.path}
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
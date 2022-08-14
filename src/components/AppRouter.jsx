import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes,privateRoutes} from "../router";
import {AuthContext} from "../context";
import LoadBar from "./UI/LoadBar/LoadBar";

const AppRouter = () => {

    const {isAuth,isLoading}= useContext(AuthContext);

    if(isLoading) {
        return <LoadBar/>
    }
    return (
        <>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map(page=> {
                            return <Route key={page.path} path={page.path}
                                          element={page.component}
                                          exact={page.exact || false}/>;
                        }
                    )}

                </Routes>
                :
                <Routes>
                    {publicRoutes.map(page=> {
                            return <Route key={page.path} path={page.path}
                                          element={page.component}
                                          exact={page.exact || false}/>;
                        }
                    )}

                </Routes>
            }
       </>

    );
};

export default AppRouter;
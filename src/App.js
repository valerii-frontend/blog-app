import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";



function App() {
	const [isAuth,setIsAuth] = useState(false);

	useEffect(()=> {
		if(sessionStorage.getItem('auth') === 'isAuth'){
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
		},[isAuth,setIsAuth])
	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth
		}}>
			<BrowserRouter>
				<Navbar/>
				<AppRouter/>
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;

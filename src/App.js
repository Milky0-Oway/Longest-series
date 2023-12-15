import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./infoblocks/Navigation/NavigationBar";
import Home from "./pages/Home";
import Series_Personal_Info from "./pages/Series_Personal_Info";
import Series_List from "./pages/Series_List";

function App() {
	return (
		<>
			<Routes>
				<Route path="Architects-of-Belarus/" element={<NavigationBar />}>
					<Route index element={<Home />} />
					<Route path="architects" element={<Series_List />} />
					<Route path="architects/:id" element={<Series_Personal_Info />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;

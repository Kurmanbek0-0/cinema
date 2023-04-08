import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layalt from "./components/layalt/Layalt";
import { MDBIcon } from "mdb-react-ui-kit";
import Runner from "../../img/runner.jpg";

function App() {
	return (
		<div>
			<Layalt />
			<Routes></Routes>
		</div>
	);
}

export default App;

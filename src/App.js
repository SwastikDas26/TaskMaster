import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { TodoWrapper } from "./components/TodoWrapper";

function App() {
	return (
        <div className="App">
            <p className="heading text-8xl mx-11 font-normal">TaskMate <span className="text-logo"> UI </span></p>
            <div className="main">
                <Navbar />
                <div className="main-window">
                    <Sidebar />
                    <TodoWrapper />
                </div>
            </div>
        </div>
    );

}

export default App;

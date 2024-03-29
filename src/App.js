import "./App.css";
import Navbar from "./components/Navbar";
import { TodoWrapper } from "./components/TodoWrapper";

function App() {
	return (
        <div className="App">
            <p className="heading text-8xl mx-11 font-normal max-[1025px]:text-6xl max-[923px]:hidden">TaskMate <span className="text-logo"> UI </span></p>
            <div className="main">
                <Navbar />
                <TodoWrapper />
            </div>
        </div>
    );

}

export default App;

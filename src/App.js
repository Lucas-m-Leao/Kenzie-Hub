import { Routes } from "./Routes";
import GlobalStyle from "./styles/Global"
import 'react-toastify/dist/ReactToastify.min.css'
import { Tosti } from "./components/Modal/styled";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <Tosti />
    </div>
  );
}

export default App;

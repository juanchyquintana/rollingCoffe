import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <>
      <Header />
        {/* <Inicio /> */}
        <Administrador />
        {/* <Error404 /> */}
      <Footer />
    </>
  );
}

export default App;

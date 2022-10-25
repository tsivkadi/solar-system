import Header from "../components/Header";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Planet3d from "../components/Planet3d";

function Planets() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="app">
        <Planet3d />
        <Info />
      </div>
    </>
  )
}

export default Planets
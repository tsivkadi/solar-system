import '../assets/SolarSystem.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SolarSystem() {

  type Planet = {
    isPlanet: boolean;
    id: string
  };

  let navigate = useNavigate(); 

  const [planets, setPlanets] = useState([]);

  const getPlanets = async() => {
    await axios.get(`https://api.le-systeme-solaire.net/rest/bodies/`)
    .then((response) => {
      const planets: [] = response.data.bodies
      const res = planets.filter((el: Planet)=> el.isPlanet === true)
      setPlanets(res)
    })
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPlanets()
  }, []);

  return (
    <div className="scale-stretched view-3D">
      <div id="solar-system">
        {
          planets.map((planet: Planet, i: number) => {
            return(
              <div id={planet.id} className="orbit" key={i}>
                <div className="pos">
                  <div className="planet" style={{background: `url(${process.env.PUBLIC_URL+ `/${planet.id}.jpg`})`}} onClick={()=> navigate(`/${planet.id}`)} >
                  </div>
                </div>
              </div>
            )
          })
        }
        <div id="sun">
        </div>
      </div>
    </div>
  )
}

export default SolarSystem
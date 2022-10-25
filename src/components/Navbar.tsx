import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Navbar(){

  type Planet = {
    isPlanet: boolean;
    id: string;
  };
  type Response = Planet[];

  const [planets, setPlanets] = useState<Response>([]);

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
    <List>
      {
        planets.map((planet: Planet, i: number) => {
          return(
            <Link to={`/${planet.id}`} className='planet-link' key={i}>{planet.id}</Link>
          )
        })
      }
    </List>
  )
}

const List = styled.ul({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1vh 2.5vw 0vh 2.5vw',
})

export default Navbar
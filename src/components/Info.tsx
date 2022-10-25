import axios from "axios";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

function Info(){

  let { planet }  = useParams();

  interface Planet{
    name: string;
    meanRadius: number;
    moons: object[];
    sideralOrbit: number;
    sideralRotation: number;
    gravity: number
  }

  const [information, setInformation] = useState<object | Planet>({})

  const getPlanets = async() => {
    await axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)
    .then((response) => {
      const data: Planet = {
        name: response.data.name,
        meanRadius: response.data.meanRadius,
        moons: response.data.moons == null ? 'There are no moons' : response.data.moons.map((a: any) => a.moon + ', '),
        sideralOrbit: response.data.sideralOrbit,
        sideralRotation: response.data.sideralRotation,
        gravity: response.data.gravity
      }
      setInformation(data)
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    getPlanets()
  }, [planet])

  return (
    <Background>
      {
        Object.entries(information).map((el) => {
          return (
            <p key={el[0]} id={el[0]} className='information'>{el[0] + ': '}<span>{el[1]}</span></p>
          )
        })
      }
    </Background>
  )
}

const Background = styled.div({
  width: '25vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(85, 85, 85, 0.15)',
  borderRadius: '1em',
  border: '5px solid gray',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  padding: '3vh 2.5vw',
  color: 'white',
  fontWeight: '600'
});

export default Info
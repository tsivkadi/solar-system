import { useParams } from "react-router-dom";
import styled from 'styled-components';

function Planet3d() {

  let { planet }  = useParams();

  const image: string = `/${planet}.jpg`
  const imgStyle = {
    background: `url(${process.env.PUBLIC_URL+ image})`
  }

  return (
    <Planet style={imgStyle}></Planet>
  )
}

const Planet = styled.div({
  width: '35rem',
  height: '35rem',
  borderRadius: '50%',
  backgroundSize: 'cover',
  boxShadow: 'inset -100px -100px 175px 0px rgba(0,0,0,1), inset 10px 10px 50px 0px rgba(252,252,252,1), 50px 50px 50px 0px rgba(0,0,0,0.5)',
  animation: 'animatePlanet 45s linear infinite',
});

export default Planet3d
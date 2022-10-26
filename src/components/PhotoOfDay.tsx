import axios from "axios";
import { useState, useEffect } from "react";
import styled from 'styled-components';

function PhotoOfDay() {

  const [photo, setPhoto] = useState<{[key: string]: any}>({});

  const getPhoto = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_KEY}`)
      .then((response) => {
        setPhoto(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhoto()
  }, []);
  
  return (
    <>
      <Title>
        <h1 id="title">{photo.title}</h1>
        <span>{photo.copyright}</span>
        <span>{photo.date}</span>
      </Title>
      <Content>
        {photo.media_type == 'image' ? <img src={photo.hdurl} alt='photo' width="690"/> : <iframe width="690" height="500"
        src={photo.url}>
        </iframe>}
      </Content>
    </>
  )
}

const Title = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: '3vh 10vw',
  color: 'white',
  alignItems: 'center'
})
const Content = styled.div({
  display: 'flex',
  justifyContent: 'center',
  padding: '3vh 10vw',
  alignItems: 'center'
})

export default PhotoOfDay
import axios from "axios";
import { useState, useEffect } from "react";
import styled from 'styled-components';

function PhotoByDate() {

  const [photos, setPhotos] = useState<{[key: string]: any}>([]);
  const [date, setDate] = useState<string>('2004-02-22');

  const getPhoto = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_KEY}&date=${date}&concept_tags=True`)
    .then((response) => {
      setPhotos(response.data)
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    getPhoto()
  }, [date]);
  
  return (
    <Content>
      <Input placeholder="for example: 2022-02-01" onChange={(e) => e.target.value.length > 8 ? setDate(e.target.value) : setDate(date)}/>
      <img src={photos.hdurl} style={{height: '80vh', width: 'auto'}}/>
    </Content>
  )
}

const Content = styled.div({
  margin: '2vh 15vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})
const Input = styled.input({
  width: '20vw',
  height: '4vh',
  border: 'none',
  marginBottom: '3vh'
})

export default PhotoByDate
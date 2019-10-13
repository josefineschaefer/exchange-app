// import React, { useState } from 'react'
// import styled from 'styled-components/macro'
// import Label from './Label'
// import AddImageBtn from './AddImageBtn'
// import axios from 'axios'

// const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
// const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

// export default function ImageUpload({image}) {
//   const [pictures, setPictures] = useState([])

//   function upload(event) {
//     const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`
//     const formData = new FormData()
//     formData.append('file', event.target.files[0])
//     formData.append('upload_preset', PRESET)

//     axios
//       .post(url, formData, {
//         headers: {
//           'Content-type': 'multipart/form-data'
//         }
//       })
//       .then(response => {
//         setPictures([...pictures, response.data.url])
//       })
//       .catch(err => {
//         console.log(err)
//         alert(err)
//       })
//   }

//   return (
//   <ImageUpload>
//       {pictures.map(pictureUrl => (
//         <ImageStyled image={image} src={pictureUrl} alt="" />
//       ))}
//       <Label>
//         Füge Bilder hinzu
//         <AddImageBtn />
//         <InputStyled
//           name="image"
//           id="imageUpload"
//           type="file"
//           onChange={upload}
//         />
//       </Label>
//     </ImageUpload>
//   )
// }

// const InputStyled = styled.input`
//   display: none;
// `
// const ImageStyled = styled.img`
//   width: 100%;
// `

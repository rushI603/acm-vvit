import React, { useState, useEffect } from 'react'
import sanityClient from '../sanityClient';



const faculty = () => {
  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //   sanityClient.fetch(
  //     `*[_type == "faculty"]{
  //       id,
  //       collegeId,
  //       name,
  //       image,
  //       experience
  //     }
  //     `
  //   )
  //   .then((data) =>{
  //     setData(data);
  //     console.log(data)
  //   })
  // },[]);
  return (
    <div>
      faculty
    </div>
  )
}

export default faculty

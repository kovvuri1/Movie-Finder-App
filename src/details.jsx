import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
//import Image from 'react-bootstrap/Image';
import YouTube from 'react-youtube';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Details = () => {
  let location=useLocation()
  console.log(location);
  let specific=location.state.x
  let [trailer,setTrailer]=useState("");
  async function getTrailer(id){
    fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=245a20d1fc2994487a595b92153393b1`).then(x=>x.json()).then(x=>setTrailer(x.results[0].key))

  }
  return (
    <section>
       <Card className="bg-dark text-white " style={{width:"800px",margin:"100px auto"}}>
      <Card.Img src={`https://image.tmdb.org/t/p/original/${specific.backdrop_path}`} alt="Card image" />
      <Card.ImgOverlay style={{textAlign:"center",marginTop:"150px"}}>
        <Card.Title>{specific.title}</Card.Title>
        <Card.Text>
        {specific.overview}
        
        </Card.Text>
        <Card.Text><Button variant="outline-secondary"  onClick={()=>getTrailer(specific.id)}>play now</Button>{' '}</Card.Text>
      </Card.ImgOverlay>
    </Card>
      <div  >
      {/* <Image src={`https://image.tmdb.org/t/p/original/${specific.backdrop_path}`} alt='imgdetail'style={{height:"500px" ,width:"100vw"}} thumbnail/>
      <p>{specific.title}</p>
      <p>{specific.overview}</p>
      <p>{specific.vote_average}</p> */}
      {/* <Button variant="outline-secondary"  onClick={()=>getTrailer(specific.id)}>play now</Button>{' '} */}
      {/* <button onClick={()=>getTrailer(specific.id)}>play now</button> */}
    </div>
    <div style={{position:"relative",top:"40px"}}>
      {trailer && <YouTube videoId={trailer} />}
    </div>
    </section>
  );
}
export default Details;

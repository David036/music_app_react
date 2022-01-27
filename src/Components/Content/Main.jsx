import React, { useEffect, useState } from "react";
import axios from "axios";
import img1 from './Images/The_King_of_Limbs_cover.jpg'
import img2 from './Images/RadioheadOkComputer.jpg'
import img3 from './Images/Dummy.jpg'
import img4 from './Images/Portishead_-_Third.png'
export default function Main() {
  const [products, setProducts] = useState([]);
  const [songs,setSongs] = useState([])
  const [img,setImg] = useState()
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/jasonbaldridge/2668632/raw/e56320c485a33c339791a25cc107bf70e7f1d763/music.json"
      )
      .then((response) => {
        setProducts([...response.data])
        
      });
      
  }, []);
  console.log(products);
  const function1  = () => {
    setSongs([...products[0].albums[0].songs])
    setImg(img1)
  }
  const function2  = () => {
    setSongs([...products[0].albums[1].songs])
    setImg(img2)
  }
  const function3  = () => {
    setSongs([...products[1].albums[0].songs])
    setImg(img3)
  }
  const function4  = () => {
    setSongs([...products[1].albums[1].songs])
    setImg(img4)
  }
  return (
    <div className="main">
      <div className="main-section-background">
        <div className="main-section">
          <h2>Featured NFTs</h2>
          <div className="group-section">
              <div className="group-item">
                  <img src={img1}/>
                  <p>The King of Limbs</p>
                  <button onClick={function1}><span>View details</span></button>
              </div>
              <div className="group-item">
                  <img src={img2}/>
                  <p>OK Computer</p>
                  <button onClick={function2}><span>View details</span></button>
              </div>
              <div className="group-item">
                  <img src={img3}/>
                  <p>Dummy</p>
                  <button onClick={function3}><span>View details</span></button>
              </div>
              <div className="group-item">
                  <img src={img4}/>
                  <p>Third</p>
                  <button onClick={function4}><span>View details</span></button>
              </div>
              
          </div>
          <h2>Latest NFTs</h2>
          <div className="songs-section">
              {songs.map((e) => {
                  return (
                    <div className="song-item">
                    <img src={img}/>
                        <p>{e.title}</p>
                        <p>{e.length}</p>
                        <button>Play</button>
                    </div>
                  )
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

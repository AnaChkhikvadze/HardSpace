import { useRef, useEffect, useState } from 'react';
import Axios from 'axios';
import "./styles.css";
import { Link } from 'react-router-dom'
export default function Cards() {

  const [cardList, setCardList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) =>
      setCardList(response.data)

    )
  }, [])


  const order = () => {
    Axios.get("http://localhost:3001/api/get2").then((response) =>
      setCardList(response.data));
  }


  return (
    <div className="Destinations">
      {cardList.map((val) => {
        <li key={val.id}></li>
        return <div className="tour">
          <img src={val.photo} className="tourImg" alt=""></img>
          <div className="tour_info">
            <div className="post_content">
              <h1>{val.tourPK}</h1>
              <p className="desc_tour">{val.description}</p>
              <div className="container_infos">
              <br></br>
                <span className='tourSpan'>7 Days: $ {val.price}/person</span>
                <br></br>
                <span> {val.days_left} days left before tour starts</span>
                <br></br>
                <br></br>
                <a href="#" className="btn" >Details</a>
              </div>
            </div>
          </div>
        </div>
      })}
    </div>
  );
}

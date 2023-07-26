import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
export default function DetailProduct() {
  const { id } = useParams();
  const [tour, setTour] = useState({
    title: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:3000/tuors/${id}`).then((response) => {
        setTour(response.data);
    });
  }, [id]);
    console.log(tour)
  return (
    <div className="container w-75 shadow-sm p-3 mb-5 bg-body rounded mt-5">
      <h1>Detail Tour</h1>
      <span style={{fontWeight: "bold"}}>Title:  </span>
        {tour.title}
      <br />
      <span style={{fontWeight: "bold"}}>Price: </span>
          {tour.price}
      <br />
      <span style={{fontWeight: "bold"}}>Price: </span>
          {tour.description}
      <br />
    </div>
  );
}

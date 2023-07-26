import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import StickyHeadTable from "./listTour";

export default function ListProduct() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/tuors").then((response) => {
      setList(response.data);
    });
  }, [list]);

  return (
    <div className="mx-3 shadow p-3 mb-5 bg-body rounded mt-5">
      <h1>Danh sách Tour</h1>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          navigate("/add");
        }}
      >
        Thêm tour
      </button>
      <StickyHeadTable rows={list} setList={setList}></StickyHeadTable>
    </div>
  );
}

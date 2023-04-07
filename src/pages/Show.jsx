import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById } from "../API/tvmaze";

const Show = () => {
    const {showId} = useParams();

    const [showData, setShowData] = useState(null);
    const [showError, setShowError] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try{
          const data = await getShowById(showId);
          setShowData(data);
        }catch (err) {
          setShowError(err);
        }
      }
      fetchData();
    }, [showId]);

    if(showError){
      return <div>We have an Error :{showError.message}</div>
    }
    if (showData){
      return <div>Got sho Data : {showData.name}</div>
    }
    return <div>Show page for show {showId}</div>;
  };
  
  export default Show;
import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://muchosnegociosrentables.com/wp-content/uploads/2015/08/campo-de-f%C3%BAtbol-5-o-7.jpg",
    "https://alquilatucancha.com/uploads/clubs/bg/grun-fc-caba.jpeg?449551",
    "https://agorasport.co/wp-content/uploads/9.jpg",
    "https://concepto.de/wp-content/uploads/2022/12/fubol-sala-futsal-cancha.jpg",
    "https://winnerdeportivos.com/wp-content/uploads/2013/06/Banquitas-01.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
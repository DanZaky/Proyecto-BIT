import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bogota_Skyline.jpg/1280px-Bogota_Skyline.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bogotá</h1>
              <h2>{data[0]} establecimientos</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Medellin.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Medellín</h1>
              <h2>{data[1]} establecimientos</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.concejodecali.gov.co/publicaciones/60189/comision-de-plan-abrio-estudio-a-proyectos-que-buscan-reactivar-la-economia-de-cali/info/concejo/media/galeria100691.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Cali</h1>
              <h2>{data[2]} establecimientos</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
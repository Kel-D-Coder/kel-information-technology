import "../Styles/Services.css";
import ServicesData from "../Components/service";

const Services = () => {
  return (
    <section className="services">
      <h1>Our Services</h1>
      <div className="service-container">
        {ServicesData.map((data) => {
          return (
            <div className="service-card" key={data.id}>
              <div
                className="serviceImg"
                style={{ backgroundImage: `url(${data.serviceImg})` }}
                ></div>
                <h2>{data.serviceName}</h2>
                <p> {data.description} </p>
            </div>
          );
        })}

       
      </div>
    </section>
  );
};

export default Services;

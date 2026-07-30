import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <h1>Navigate Your Campus Smarter</h1>

      <p>
        Find classrooms, labs, hostels, events and accessible routes in seconds.
      </p>

      <div className="hero-buttons">
        <button className="location-btn">
          📍 Use My Location
        </button>

        <button className="explore-btn">
          Explore Campus
        </button>
      </div>

    </section>
  );
}

export default Hero;
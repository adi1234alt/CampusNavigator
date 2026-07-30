import "../styles/FeatureCards.css";

function FeatureCards() {

    const places = [
        "📚 Library",
        "🏫 Academic Block",
        "🧪 Labs",
        "🏠 Hostel",
        "🍔 Cafeteria",
        "🏥 Medical Centre",
        "🚻 Washroom",
        "🎉 Events"
    ];

    return (
        <section className="cards-section">

            <h2>Popular Places</h2>

            <div className="cards">

                {places.map((place, index) => (
                    <div className="card" key={index}>
                        <h3>{place}</h3>
                        <p>Tap to Navigate</p>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default FeatureCards;
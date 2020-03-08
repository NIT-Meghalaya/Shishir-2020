import './map.styles.scss'

const Map = () => {
    return (
        <section className="map-section">
            <div className="container">
                        <iframe 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=nit%20meghalaya&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0">
                        </iframe>
            </div>
        </section>
    );
}

export default Map;
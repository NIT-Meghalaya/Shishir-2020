import './map.styles.scss'

const Map = () => {
    return (
        <section className="map-section">
            <div className="container">
                        <iframe 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=nit%20meghalaya&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            frameborder="0" 
                            scrolling="no" 
                            marginheight="0" 
                            marginwidth="0">
                        </iframe>
            </div>
        </section>
    );
}

export default Map;
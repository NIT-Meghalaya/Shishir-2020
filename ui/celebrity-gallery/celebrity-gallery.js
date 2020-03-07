import './celebrity-gallery.styles.scss';

const CelebrityGallery = () => {
    return (
       
        <section className="gallery-section">
            <p className="paragraph u-center-text u-margin-top-medium u-margin-bottom-medium">
                Few celebrities who have graced our stage till now.
            </p>
           
            <div className="past-gallery">
                <div className="gallery-top">
                    <figure>
                        <img src="/images/music.jpg" />

                    </figure>
                    <figure>
                        <img src="/images/music.jpg" />
                    </figure>
                    <figure>
                        <img src="/images/music.jpg" />
                    </figure>
                    
                </div>
                <div className="gallery-bottom">
                    <figure>
                        <img src="/images/music.jpg" />
                    </figure>
                    <figure>
                        <img src="/images/music.jpg" />
                    </figure>
                    <figure>
                        <img src="/images/music.jpg" />
                    </figure>
                    
                </div>
                
            </div>
        </section>
    )
}

export default CelebrityGallery;
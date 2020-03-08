import './celebrity-gallery.styles.scss';

const CelebrityGallery = () => {
    return (
       
        <section className="gallery-section">
            <p className="paragraph u-center-text u-margin-top-medium u-margin-bottom-medium">
                Few celebrities who have graced our stage till date.
            </p>
           
            <div className="past-gallery">
                <div className="gallery-top">
                    <figure>
                        <img src="/images/celebrity/1.jpg" alt="Sreerama Chandra Mynampati" />
                    </figure>
                    <figure>
                        <img src="/images/celebrity/2.jpg" alt="Nikhil D'Souza"/>
                    </figure>
                    <figure>
                        <img src="/images/music.jpg" alt="Arsh Mohammad"/>
                    </figure>
                    
                </div>
                <div className="gallery-bottom">
                    <figure>
                        <img src="/images/celebrity/4.jpg" alt="Gajendra Verma"/>
                    </figure>
                    <figure>
                        <img src="/images/celebrity/5.jpg" alt="Kshitij Tarey"/>
                    </figure>
                    <figure>
                        <img src="/images/celebrity/6.jpg" alt="Saurabhee Debbarma"/>
                    </figure>
                    
                </div>
                
            </div>
        </section>
    )
}

export default CelebrityGallery;
import './overlay.styles.scss';

const Overlay = (props) => {
    const event = props.event;
    return (
        <div>
            <div className="close">
                <span onClick={props.closeOverlay}>close</span>
            </div>
            <div className="overlay-content">
                <h1>{event.title}</h1>
                <p>{event.desc}</p>
                {
                    event.details.map(details => {
                        return (
                            <div>
                                <h2>{details.title}</h2>
                                <ol className="content-container">
                                    {
                                        details.content.map(content => {
                                            return <li>{content}</li>
                                        })
                                    }
                                </ol>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Overlay;
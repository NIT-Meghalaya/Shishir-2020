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
                <div className="desc-container">
                    <p>{event.desc}</p>
                </div>
                {
                    event.details.map(details => {
                        return (
                            <div className="content-container">
                                <h2>{details.title}</h2>
                                <div  className="paragraph">
                                    <ol>
                                        {
                                            details.content.map(content => {
                                                return <li>{content}</li>
                                            })
                                        }
                                    </ol>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Overlay;
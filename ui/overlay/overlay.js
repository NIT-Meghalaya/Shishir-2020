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
            </div>
        </div>
    )
}

export default Overlay;
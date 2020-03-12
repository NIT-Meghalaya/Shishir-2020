import './content-card.styles.scss';

const Card = (props) => {
    return (
        <div className = "content-card-container">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Card;
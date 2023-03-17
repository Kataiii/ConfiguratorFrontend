interface CardProps{
    image : string,
    title : string,
    content : string
}

const CardPossibility : React.FC<CardProps> = (props) => {
    return(
        <div>
            <img src={props.image}/>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default CardPossibility;
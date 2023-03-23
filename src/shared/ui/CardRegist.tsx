import Button from "./ButtonPrim";


export interface cardRegistProps{
    image: any,
    title: string,
    altImage: string
    action: () => void
}

const CardRegist = (props: cardRegistProps) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <img src={props.image} alt={props.altImage}></img>
            <Button title="Регистрация" onClick={props.action}></Button>
        </div>
    );
}

export default CardRegist;
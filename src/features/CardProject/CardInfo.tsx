interface CardInfoProps{
    name: string;
    date?: Date;
    name_folder?: number;
}

const CardInfo: React.FC<CardInfoProps> = ({name, date, name_folder}) => {
    return(
        <div>
            <p>{name}</p>

        </div>
    )
}

export default CardInfo;
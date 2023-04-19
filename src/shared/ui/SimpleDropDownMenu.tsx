import styles from './css/Menu.module.css'


export interface SimpleDropDownMenuProps{
    content : string,
    color : string,
    action : () => void
}

const SimpleDropDownMenu = (props : {buttons : SimpleDropDownMenuProps[]}) => {
    return(
        <div className={styles.SimpleDropDiv}>
            <>
                {
                    props.buttons.map(item => 
                        <div className={styles.SimpleDropItem}>
                            {
                                item.color === 'red'
                                ?
                                    <p key={item.content} className={styles.SimpleDropItemContentRed} onClick={item.action}>{item.content}</p>
                                :
                                    <p key={item.content} className={styles.SimpleDropItemContent} onClick={item.action}>{item.content}</p> 
                            }
                        </div>
                    )
                }
            </>
        </div>
    )
}

export default SimpleDropDownMenu;
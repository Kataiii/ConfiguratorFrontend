import { IFolderProject } from "../../../entities/Folder/FolderProject";
import DropDownItemFolder from "./DropDownItemFolder";
import styles from "./css/DropDownFolder.module.css";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../..";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

interface DropDownFolderProps {
    folders: IFolderProject[];
    isHide: boolean;
}

const DropDownFolder: React.FC<DropDownFolderProps> = observer(({ folders, isHide }) => {
    const navigate = useNavigate();
    const { folderStore } = useContext(Context);
    const [ store, setStore] = useState<IFolderProject[]>(folders);

    const handleDragDrop = (results: any) => {
        const {source, destination, type} = results;

        if(!destination) return;

        if(source.droppableId === destination.droppableId && source.index === destination.index) return;

        if(type === 'group'){
            const reorderedStores = [...store];
            const sourceIndex = source.index;
            const destinationIndex = destination.index;

            const [removedStore] = reorderedStores.splice(sourceIndex, 1);
            reorderedStores.splice(destinationIndex, 0, removedStore);

            return setStore(reorderedStores);
        }
    }

    useEffect(() => {
        setStore(folders);
    }, [folders])
    
    return (
        <DragDropContext onDragEnd={handleDragDrop}>
            <ul className={[styles.DivList, isHide ? styles.DivListHide : styles.DivListNotHide].join(' ')}>
                <Droppable droppableId="folsersMenu" type="group">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                store.map((item, index) => {
                                    return <Draggable draggableId={item.id.toString()} key={item.id} index={index}>
                                        {(provided) => (
                                                <div  {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                                    <DropDownItemFolder
                                                        folderId={item.id}
                                                        key={item.id}
                                                        index={index}
                                                        content={item.name}
                                                        onClick={() => {
                                                            navigate(`/home/projects/${item.name}`);
                                                            folderStore.setActiveFolder(item);
                                                        }} />
                                                </div>
                                        )}
                                        </Draggable>
                                })
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </ul>
        </DragDropContext>
    )
})

export default DropDownFolder;
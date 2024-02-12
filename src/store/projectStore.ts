import { makeAutoObservable } from "mobx"
import { IProjectInfo } from "../entities/Project"

class ProjectStore {
    projects : IProjectInfo[] = [];

    constructor() {
        makeAutoObservable(this)
    }

}

export default ProjectStore;
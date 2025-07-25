interface IProject {
    id: string;
    name: string;
    createdBy: string;
    createdAt: Date;
    pictureUrl?: string;
}

export class Project implements IProject {
    id: string;
    name: string;
    createdBy: string;
    createdAt: Date;
    pictureUrl?: string;

    constructor(id: string, name: string, createdBy: string, createdAt: Date, pictureUrl?: string) {
        this.id = id;
        this.name = name;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.pictureUrl = pictureUrl;
    }
}

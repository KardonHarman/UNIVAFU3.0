export class New {

    constructor(_id = '', title = '', description = '', detail = '', createdAt = '', updatedAt = '', imagePath = '', status = true) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.detail = detail;
        this.createdAt = createdAt;
        this.updateAt = updatedAt;
        this.imagePath = imagePath;
        this.status = status;
    }

    _id: string;
    title: string;
    description: string;
    detail: string;
    createdAt: string;
    updateAt: string;
    imagePath: string;
    status: boolean;
}
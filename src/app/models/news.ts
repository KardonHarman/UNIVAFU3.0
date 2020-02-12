export class New {

    constructor(_id= '', title = '', description='', imagePath='', status=true){
        this._id = _id;
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
        this.status = status;
    }

    _id: string;
    title : string;
    description : string;
    imagePath: string;
    status: boolean;
}
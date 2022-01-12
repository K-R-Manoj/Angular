export class Note {


    public  Title       :   string  |   undefined;
    public  Tag         :   string  |   undefined;
    public  Description :   string  |   undefined;
    public  Color       :   string  |   undefined;

    constructor(title:string,tag:string,desc:string,color:string)
    {
        this.Title          =   title;
        this.Tag            =   tag;
        this.Description    =   desc;
        this.Color          =   color;
    }
}

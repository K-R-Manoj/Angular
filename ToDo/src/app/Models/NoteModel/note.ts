export class Note {

    public  ID          ?:  string;
    public  Title       :   string  |   undefined;
    public  Tag         :   string  |   undefined;
    public  Description :   string  |   undefined;
    public  Color       :   string  |   undefined;
    public  CreatedAt   :   string  |undefined;

    // constructor(id:any,title:string,tag:string,desc:string,color:string,time:Date)
    // {
    //     this.ID             =   id;
    //     this.Title          =   title;
    //     this.Tag            =   tag;
    //     this.Description    =   desc;
    //     this.Color          =   color;
    //     this.CreatedAt           =   time;
    // }
}

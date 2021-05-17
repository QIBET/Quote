export class Quote {
    showDescription: boolean;
    constructor(public name: string,public author: string,public message: string,public upvote: number, public downvote: number, public publishDate: Date){
    this.showDescription=false;
    }
}
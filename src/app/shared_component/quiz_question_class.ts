export class Question{
    Question:string;
    a:string;
    b:string;
    c:string;
    d:string;

    Answers:string;
    CorrectAnswer:string;

    constructor(question:string,a:string,b:string,c:string,d:string,corans:string="",ans:string=""){
        this.Question = question;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;

        this.Answers = ans;
        this.CorrectAnswer = corans;
    }
}


export class Info{
    Name:string;
    Difficulty:string;
    Category:string;

    constructor(name:string="",difficulty:string="",category=""){
        this.Name = name;
        this.Difficulty = difficulty;
        this.Category = category;
    }
}

export class Result{
    Correct:number;
    End:boolean;

    constructor(correct:number=0,end:boolean=true){
        this.Correct = correct;
        this.End = end;
    }
}
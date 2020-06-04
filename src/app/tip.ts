export class Tip {
     
    constructor( 
                public gameid: number, 
                public err: number,  
                public bits:string, 
                public tipteamid: number,
                public venue: string,  
                public ateamid: number, 
                public round: number, 
                public sourceid: string,   
                public tip: string, 
                public date: string, 
                public confidence: number, 
                public source: string, 
                public hconfidence: number, 
                public updated: string,   
                public hteamid: number, 
                public correct: number, 
                public hteam: number,  
                public margin: number,
                public year: number,
                public ateam: string,

            ){} 
}


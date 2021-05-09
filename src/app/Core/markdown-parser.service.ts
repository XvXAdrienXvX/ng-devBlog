import { Injectable} from '@angular/core';
import * as marked from 'marked';

@Injectable()
export class MarkdownParserService{

   constructor(){
    
   }

   ngOnInit(){
    marked.setOptions({
        gfm: true,
        breaks: true
    });
   }

   convert(markdown: string){
       return marked(markdown);
   }
}
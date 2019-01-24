import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Article } from "src/domain/article";

@Injectable ()


export class ArticleSevice {
    getArticle() {
        return "Hello from service"
    };
    getArticles(){
        return 
        [{ id: 1,title: "First",content:'1 content from service'},
        { id: 2,title: "Second",content:'2 aDsdFwerwASdna'},
        { id: 3,title: "Third",content:'3 adzxwerwecvSDFDna'}]
    }
}
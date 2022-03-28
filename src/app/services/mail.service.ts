import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface Mail {
  name: string;
  email: string;
  subject: string;
  content: string;
  attachment?: File;
}

@Injectable({
  providedIn: "root",
})
export class MailService {
  constructor(private http: HttpClient) {}

  postMail(mail: Mail) {
    //   const headers = new HttpHeaders();
    //   headers.append("Content-Type", "multipart/form-data");
    //   headers.set("Application/Type", "application/json");
    return this.http
      .post("https://elect-presi.herokuapp.com/email", mail)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}

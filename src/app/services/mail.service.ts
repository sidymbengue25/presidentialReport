import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface Mail {
  name: string;
  email: string;
  subject: string;
  content: string;
}

@Injectable({
  providedIn: "root"
})
export class MailService {
  constructor(private http: HttpClient) {}

  postMail(mail: Mail) {
    console.log(mail);

    const headers = new HttpHeaders();
    headers.set("Content-Type", "application/json; charset=utf-8");
    return this.http
      .post("api/email", mail)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}

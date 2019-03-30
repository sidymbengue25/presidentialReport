import { TitleService } from "./../../services/title.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MailService } from "src/app/services/mail.service";

@Component({
  selector: "el-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  attachment: File;
  addAttachment: boolean;
  addAttachmentQuestionAnswered: boolean;
  isLoading: boolean;
  isUpLoading: boolean;
  constructor(
    private fBuilder: FormBuilder,
    private mailService: MailService,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.initForm();
    this.titleService.setTitle("Open-Technology - Contacts");
  }
  initForm() {
    this.contactForm = this.fBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      content: ["", Validators.required]
    });
  }
  yesAdd() {
    this.addAttachmentQuestionAnswered = true;
    this.addAttachment = true;
  }
  noIdont() {
    this.addAttachmentQuestionAnswered = true;
    this.addAttachment = false;
  }
  send() {
    if (this.contactForm.invalid) {
      return;
    }
    if (!this.isUpLoading) {
      this.isLoading = true;
      const mail: any = {
        name: this.contactForm.get("name").value,
        email: this.contactForm.get("email").value,
        subject: this.contactForm.get("subject").value,
        content: this.contactForm.get("content").value
      };
      // if (this.attachment) {
      //   mail.attachment = this.attachment;
      // }
      this.mailService
        .postMail(mail)
        .toPromise()
        .then(success => {
          this.contactForm.reset();
          M.toast({ html: "Merci de nous avoir écrit", classes: "green" });
          this.isLoading = false;
        })
        .catch(err => {
          M.toast({
            html: "Erreur lors de l'envoi",
            classes: "materialize-red"
          });
          this.isLoading = false;
        });
    }
  }
  // handleUpload(event) {
  //   this.isUpLoading = true;
  //   const file: File = event.target.files[0];

  //   this.attachment = file;
  //   this.isUpLoading = false;
  // }
}

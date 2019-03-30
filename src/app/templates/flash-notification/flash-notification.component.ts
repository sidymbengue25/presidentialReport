import { Component, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from "@angular/material";

interface NotificationData {
  type: "succes" | "warning" | "error";
  icon: string;
  message: string;
}

@Component({
  selector: "el-flash-notification",
  templateUrl: "./flash-notification.component.html",
  styleUrls: ["./flash-notification.component.scss"]
})
export class FlashNotificationComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: NotificationData) {}
}

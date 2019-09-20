import { Component } from "@angular/core";

// Some of the metadata is in the @Component decorators that you added to your component classes.
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Tour of Heroes";
}

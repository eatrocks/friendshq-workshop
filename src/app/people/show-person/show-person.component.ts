import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-show-person",
  templateUrl: "show-person.component.html",
  styleUrls: ["show-person.component.css"]
})
export class ShowPerson implements OnInit {
  constructor() {}
  @Input() friend;
  toggleLike($event) {
    //$event.stopPropagation(); // these should work
    //$event.stopImmediatePropagation();
    this.friend.fav = !this.friend.fav;
  }
  ngOnInit() {}
}

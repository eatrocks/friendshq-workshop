import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Friend } from "src/app/shared/friend.model";

@Component({
  selector: "app-show-person",
  templateUrl: "show-person.component.html",
  styleUrls: ["show-person.component.css"]
})
export class ShowPerson implements OnInit {
  constructor() {}
  @Input() friend;
  @Output() notifyParent: EventEmitter<Friend> = new EventEmitter();

  toggleLike($event) {
    //$event.stopPropagation(); // these should work
    //$event.stopImmediatePropagation();
    this.friend.fav = !this.friend.fav;
    this.notifyParent.emit(this.friend);
  }
  ngOnInit() {}
}

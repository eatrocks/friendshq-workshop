import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Friend } from "src/app/shared/friend.model";
import { FriendsService } from "src/app/shared/friend.service";

@Component({
  selector: "app-show-person",
  templateUrl: "show-person.component.html",
  styleUrls: ["show-person.component.css"]
})
export class ShowPerson implements OnInit {
  constructor(private friendService: FriendsService) {}
  @Input() friend;
  @Output() notifyParent: EventEmitter<Friend> = new EventEmitter();

  toggleLike($event) {
    //$event.stopPropagation(); // these should work
    //$event.stopImmediatePropagation();
    this.friend.fav = !this.friend.fav;
    this.friendService.saveFriend(this.friend).subscribe(f => {
      this.friend = f;
      this.notifyParent.emit(f);
    });
  }
  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";
import { Friend } from "src/app/shared/friend.model";
import { FriendsService } from "src/app/shared/friend.service";

@Component({
  selector: "app-person-list",
  templateUrl: "person-list.component.html",
  styleUrls: ["person-list.component.css"]
})
export class PersonList implements OnInit {
  constructor(private friendService: FriendsService) {}
  displayBanner = false;

  showBanner(friend: Friend) {
    this.displayBanner = true;
    setTimeout(() => {
      this.displayBanner = false;
    }, 3000);
  }

  handleLike(friend: Friend) {
    this.showBanner(friend);
  }

  friends = [];

  ngOnInit() {
    this.friendService
      .getFriends()
      .subscribe(friends => (this.friends = friends));
  }
}

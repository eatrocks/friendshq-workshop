import { Component, OnInit } from "@angular/core";
import { Friend } from "src/app/shared/friend.model";

@Component({
  selector: "app-person-list",
  templateUrl: "person-list.component.html",
  styleUrls: ["person-list.component.css"]
})
export class PersonList implements OnInit {
  constructor() {}
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

  friends: Friend[] = [
    {
      id: 1,
      firstName: "Michelle",
      lastName: "Mulroy",
      gender: "female",
      fav: true
    },
    {
      id: 2,
      firstName: "Venkat",
      lastName: "Subramanian",
      gender: "male",
      fav: true
    },
    {
      id: 3,
      firstName: "Matt",
      lastName: "Forsythe",
      gender: "none",
      fav: false
    },
    {
      id: 4,
      firstName: "Nate",
      lastName: "Schutta",
      gender: "male",
      fav: true
    }
  ];
  ngOnInit() {}
}

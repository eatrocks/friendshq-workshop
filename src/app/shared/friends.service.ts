import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Friend } from "./friend.model";

@Injectable({
  providedIn: "root"
})
export class FriendsService {
  constructor(private http: HttpClient) {}

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>("http://localhost:3000/friends");
  }
}

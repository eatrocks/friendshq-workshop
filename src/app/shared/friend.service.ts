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

  saveFriend(friend: Friend): Observable<Friend> {
    console.log("Saving our friend");
    const url = `http://localhost:3000/friends/${friend.id}`;
    const headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    });
    return this.http.put<Friend>(url, JSON.stringify(friend), { headers });
  }
}

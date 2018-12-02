import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PeopleComponent } from "./people/people.component";
import { PersonList } from "./people/person-list/person-list.component";
import { ShowPerson } from "./people/show-person/show-person.component";

@NgModule({
  declarations: [AppComponent, PeopleComponent, PersonList, ShowPerson],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

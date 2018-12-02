# Angular-with-TypeScript-Workshop

[Source Gist on Github](https://gist.githubusercontent.com/looselytyped/b262083d48468a32c76ef32f51d8533b/raw/04fbcb31d17e5fadcbb594acd736e49e1f41fa07/AngularSummit-2018.md)

## Logistics

- Lunch time
- Breaks
- Power strips
- Pair with your neighbor!!

## Setup

- Open [Style Guide](https://angular.io/guide/styleguide#!#application-structure-and-angular-modules)
- **If you are using VS Code** then make sure the following settings are put in place

```
"editor.formatOnSave": true,
"editor.insertSpaces": true,
```

**Optionally**

```
"files.autoSave": "onFocusChange"
```

Also, if you have not, install the following extensions

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [Angular v6 Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Introduction - @Discussion

- Show of hands - How many have used Anguar1?
- Enterprisey?
- Overwhelming?
- As you get in the flow of things, things get easier. But there is a large overhead

- Big changes

  - Typescript
  - Components everywhere
  - Observables (a.k.a "reactive")
  - Platform!!
    - Need to hand hold it along the way

- What stayed the same?

  - DI
  - Services
  - Opinionated

- Bootstrapping your app

  - Angular CLI

- Preferred editor

  - Visual Studio Code
  - Sublime Text

- Finally,
  - What do we have?
  - what are we going to do?

## Components - @Discussion

- What is a component?
- How does Angular use components?
- Hierarchy of components
- Send data down, emit events up
- No scopes, no two-way binding, no more MVC

## Components - @Exercise

- Update `app.component.html`

```html
<div class="container">
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark navbar-toggleable-sm justify-content-center"
  >
    <button
      class="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target=".navbar-collapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a href="/" class="navbar-brand d-flex w-50 mr-auto">Friends HQ</a>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
        <li class="nav-item"><a class="nav-link" href="#">Dashboard</a></li>
        <li class="nav-item"><a class="nav-link" href="#">People</a></li>
      </ul>
    </div>
  </nav>
</div>
<div class="container"><!-- Insert your code here --></div>
<footer class="footer text-center">
  <nav class="navbar fixed-bottom navbar-light bg-faded">
    <a class="navbar-brand" href="#">Created by Looselytyped</a>
  </nav>
</footer>
```

## Components - @Exercise

- See how `app.component.ts` is being used in `app.module.ts`
- Introduce variables in `app.component.ts` and use them in the template

## Components - @Discussion

- Component hierarchy
  - Just as `index.html` uses `app-root` we can create another component, say `app-child-component` and use it in `app.component.html`
  - What does it take to create a new component?
    - Create the necessary files in **the right location** (Refer to Style Guide)
    - Create an `index.ts` file and export the component
    - `declare` the component in `app.module.ts`
    - Use it somewhere in the DOM

## Components - @Exercise

- Create `PeopleComponent`

  - The `people` directory **should be under** `src/app/`
  - The `selector` **needs to be** `app-people`
  - The `templateUrl` should be `people.component.html`

- Update `app/people/people.component.html`

```html
<div><h1>People Component</h1></div>
```

- Be sure to update `app.module.ts`!!
- Update `app.component.html` and use the selector where it says `<!-- Insert your code here -->`

## Components - @Discussion

- Now we need to display a "list" of people
- While it seems that `PeopleComponent` is an "empty" component, it is usual for "feature root" components to be just like the "root" component - they act as the place where you hang all the features off of

## Components - @Exercise

- Create a `PersonListComponent` under `people/person-list` directory

  - **Use the snippets functionality in VS code if you have it installed**
  - The snippet is `Ctrl-space` followed by `a-component` then "tab" key
  - The `selector` **should be** `app-person-list`
  - **Note** that here we are using the `person-list.component.css` file, so be sure to introduce a `styleUrls` array in your `@Component` descriptors

- Update `person-list.component.html`

```html
<div class="person-list">
  <div class="row">
    <div class="col-xs-12 col-md-9">
      <div class="list-group">
        <a
          href="#"
          class="list-group-item list-group-item-action flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1"><!-- Display first friend here --></h5>
          </div>
        </a>
      </div>
    </div>
    <div class="col-xs-12 col-md-3 sidebar">
      <a href="#" class="btn btn-success sidebar-cta disabled"> Add someone </a>
    </div>
  </div>
</div>
```

- Update `person-list.component.css`

```css
.person-list .list-group,
.sidebar {
  margin-top: 20px;
}

.person-list .list-group {
  border: 1px solid #eee;
  border-radius: 3px;
}

.person-list .sidebar .btn {
  padding: 15px;
  width: 100%;
}
```

- **Be sure to update `app.module.ts`!**
- Use the `PersonListComponent` in `people.component.html`

## Modeling - @Discussion

- Models, and mapping to entities
- Using models in your components

## Modeling - @Exercise

- Define a **interface** called `Friend` in `shared/friend.model.ts` directory to map entities in `server/api/db.json`
- Declare an array of friends on `PersonListComponent` and initialize it to an array
  - Copy the array found in `server/api/db.json` to `person-list.component.ts` and assign it to a local variable if it makes it easier
- Display the first and last name of the first friend in that array in `person-list.component.html`

## Components - @Discussion

- Do we need another component?
  - Whats the reuse potential?
  - Is there enough state to manage?
- How do we loop over a list of items?
  - If we are looping over a child component, how do we supply it with what it needs?

## Components - @Exercise

- Create a `ShowPersonComponent` under `people/show-person`

  - `selector` **must be** `app-show-person`
  - Make sure you have the `stylesUrl` attribute set in `@Component`

- Ensure it has an `@Input() friend: Friend` attribute

- Update `show-person.component.html`

```html
<a
  href="#"
  class="list-group-item list-group-item-action flex-column align-items-start"
>
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">{{ friend.firstName }} {{ friend.lastName }}</h5>
    <small>
      <div class="heart-rating">
        <span class="fa fa-heart" data-rating="1"></span>
      </div>
    </small>
  </div>
</a>
```

- Update `show-person.component.css`

```css
.heart-rating {
  line-height: 32px;
}

.heart-rating .fa-heart,
.heart-rating .fa-heart-o {
  font-size: 2em;
}

.heart-rating .fa-heart {
  color: red;
}
```

- Use `*ngFor` in `person-list.component.html` invoking `app-show-person` setting the `friend` attribute for each friend in the `friends` array

## Events - @Discussion

- How do we attach events to components?
  - We can use the browser events like `click` and invoke a method on the component
- Given that the state of the component changes how do we conditionally apply a `class` to the component?
  - We can use the `[ngClass]` directive
  - Notice that this is a "setter" just like `[friend]=friend` is

## Events - @Exercise

- Modify `show-person.component.html` to attach a `click` handler to `heart-rating`
  - Introduce a method called 'like' in `ShowPersonComponent` that that toggles the `fav` flag on the `friend` attribute
  - Invoke it by attaching a `(click)` handler in the template so that you invoke `like` on a click
  - To avoid event propogation you can simply do something like `like(); false;` in the template
- Once you do that, use `ngClass` to flit the `class` of the `span` between `fa-heart` and `fa-heart-o`
  - You can use tertiary statements in HTML like so `(friend.fav)?'fa-heart':'fa-heart-o'`

## Events - @Discussion

- How do we notify the parent of an event?
  - We can use the `EventEmitter` and wrap anything in the event that is to be propagated
- The parent can then listen for the name of that "event" and attach a callback in the template

## Events - @Exercise

- Introduce an `Output` event emitter in `ShowPersonComponent` that emits an event of type `Friend`
- When a friend is "liked" go ahead and emit the event wrapping the friend in it

- In `PersonListComponent`'s template "listen" for that event, and attach a handler to set an attribute named `displayBanner` to true
  - **NOTE** that you HAVE to declare the attribute _first_ (initialize to `false`) and then set it to true on receiving an event
  - **Make sure** that you switch `displayBanner` to false eventually (You can use `setTimeout` for this
- Here is the HTML you will need to add to `person-list.component.html`

```html
<div class="col-xs-12 col-md-9">
  <div *ngIf="displayBanner" class="alert alert-success box-msg" role="alert">
    <strong>List Saved!</strong> Your changes has been saved.
  </div>
</div>
```

- Here is what `displayBanner` should look like in `PersonListComponent`

```typescript
showBanner(friend: Friend) {
  this.displayBanner = true;
    setTimeout(() => {
      this.displayBanner = false;
    }, 3000);
  };
```

## Services - @Discussion

- How do services work in Angular?

  - If they too have dependencies (for e.g. a service might need `HttpClient`) then you need to mark the service as `@Injectable`
  - They **need** to be "provided"
  - Once provided they can be injected into other components

- AJAX Calls
  - Will need `HttpClient` injected
  - `HttpClient` has methods (like `get` and `put`) return `Observable`-s

## Services - @Exercise

### DO THIS FIRST!!

- Open a new terminal and run `npm run server` (So now you have two terminals, one running `ng serve` and now this)

### Then

- Import `HttpClientModule` from `@angular/common/http` in our module
- Create a `FriendsService` under `app/shared` (**Use the command line `ng g service shared/Friends --dry-run true` and see what it does**
  - Make sure it is `@Injectable` !!
- Inject `HttpClient` in it's constructor

- **You will need a BUNCH of imports**

```typescript
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
```

- Implement a `getFriends` method that `get`s `http://localhost:3000/friends` and returns `Observable<Array<Friend>>`

```typescript
  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>('http://localhost:3000/friends');
  }
```

## Dependency Injection - @Discussion

- Now that we have a service, how do we use it in our components?
  - This is the same as how we used `HttpClient` in our `FriendService`!
- We also need to discuss the lifecycle of components, especially what `OnInit` offers us, and why it is useful

## Dependency Injection - @Exercise

- Inject the `FriendService` in `PersonListComponent`
- Instead of hard-coding the array of friends, use `onInit` to populate the friends array like so

```typescript
this.friendService.getFriends().subscribe(friends => (this.friends = friends));
```

## Dependency Injection - @Discussion

- Much like `HttpClient.get` we also have `HttpClient.put` but the signature is a tad more elaborate.
  - Specifically in our situation, our backend which is the `json-server` that expects us to supply the right `HttpHeaders` else it won't do anything
  - `put` also requires a payload

## Dependency Injection - @Exercise

- Implement `saveFriend` which takes a `Friend` as an argument, does a `put` on the backend with the supplied `Friend` as a payload, and with the right `HttpHeaders`. Here is what the headers look like

```typescript
const headers: HttpHeaders = new HttpHeaders({
  "Content-Type": "application/json",
  Accept: "application/json"
});
```

- **Note** that the backend sends you back the updated friend record!
- Go ahead and use that method in `ShowPersonComponent`'s `like` method to save when you like/unlike a friend
  - First, inject the service in the constructor
  - Then update the `like` method to use `saveFriend`

## Components - @Discussion

- Smart vs. dumb components
  - Smart components
    - Usually leverage services
    - Know how to get/load/update data
  - Dumb components
    - Fully defined via their API
    - Everything is an `@Input` or an `@Ouput`

## Components - @Exercise

- Can we make `ShowPersonComponent` "dumb"?
- Implement this and see what it looks like
  - This means that `ShowPersonComponent` will **no longer need** `FriendsService` injected into its constructor
  - Also, simplify the `like` method to **not** save the friend

```typescript
  like() {
    this.friend.fav = !this.friend.fav;
    this.notifyParent.emit(this.friend);
  }
```

**But! Where do we save our friend?** - In the `PersonListComponent` of course!

- Instead, when the parent `PersonListComponent` receives the `notifyParent` (which in turn invokes `showBanner`) it will now need to "save" the fact that a friend was "liked". Modify `showBanner` to _first_ save the friend, and _then_ `showBanner`

## Routing - @Discussion

- How does routing work in Angular?
  - I like to use a separate file called `app.routes.ts`
  - This declares a `Routes` object which is essentially an array of `Route` objects
  - Each `Route` object introduces a `path` and a `component` to use for that path
  - We need to then install the routes as part of our `imports` in `app.module.ts`
  - Finally we need to use `router-outlet` in the DOM to signify which portions of the DOM get managed by the router

## Routing - @Exercise

- First you need to `import` `RouterModule` into your `AppModule`
- Create a new file called `app.routes.ts` next to `app.module.ts` file so that we
  1. route `people` to use the `PeopleComponent`
  2. trap `**` to `redirectTo` `people`
  3. **Be sure** to `import` `Routes` coz you will need it
- Import that file into `app.module.ts` and import the routes using `Router.forRoot`
- Update `app.component.html` to use `router-outlet`

## Routing - @Discussion

- Usage of `routerLink` and `routerLinkActive` directives in the DOM

## Routing - @Exercise

- Update the navbar links in `app.component.html` to use these two directives.
  - Remember that I have already supplied an `active` class to highlight which link is active

## Routing - @Exercise

- Use the `angular-cli` to generate a `DashboardComponent`
  - In your terminal you will need to do `ng generate component <component-name>`
- Update `dashboard.component.html` to look like this

```html
<div class="container">
  <div class="dashboard">
    <div class="dashboard-box dashboard-stat">
      <h2>Statistics about your account</h2>
      <ul class="list-inline">
        <li class="list-inline-item">
          <span class="stat-number">1</span>
          <span class="stat-description">Contacts</span>
        </li>
        <li class="list-inline-item">
          <span class="stat-number">2</span>
          <span class="stat-description">Kids</span>
        </li>
      </ul>
    </div>
  </div>
</div>
```

- Update `dashboard.component.css` to look like this

```css
.dashboard {
  background-color: #fff;
  padding-top: 50px;
}

.dashboard .dashboard-box.dashboard-stat {
  margin-bottom: 40px;
  text-align: center;
}

.dashboard .dashboard-box {
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  padding: 15px;
}

.dashboard .dashboard-box h2 {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 5px;
}

.dashboard .dashboard-box.dashboard-stat li:not(:last-child) {
  margin-right: 25px;
}

.dashboard .dashboard-box.dashboard-stat li {
  display: inline-block;
}

.dashboard .dashboard-box.dashboard-stat .stat-number {
  display: block;
  font-size: 25px;
}

.dashboard .dashboard-box.dashboard-stat .stat-description {
  font-size: 13px;
}
```

- Introduce a new route that uses the `DashboardComponent` when the route is `/dashboard`
- Update the `Dashboard` link in `app.component.html` so that it links correctly and displays the right class (`active`) when clicked

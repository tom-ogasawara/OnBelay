# OnBelay

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://onbelay.herokuapp.com/
[trello]: https://trello.com/b/6AzFWISl/onbelay

## Minimum Viable Product

OnBelay is a web application inspired by OKCupid built using Ruby on Rails
and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [x] Browse and search other users by location and ‘looking for’
- [x] Messaging
- [x] Personality questions
- [x] Match percentages based on question answers
- [ ] Production README
- [x] Bonus: add likes
- [ ] Bonus: block or hide other users
- [x] Bonus: mark importance of questions and weight accordingly in % match

## Design Docs

* [View Wireframes](wireframes)
* [React Components](component-hierarchy.md)
* [API endpoints](api-endpoints.md)
* [DB schema](schema.md)
* [Sample State](sample-state.md)


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication W8D2-W8D3 (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [x] New Rails project
- [x] `User` model/migration
- [x] Back end authentication (session/password)
- [x] `StaticPages` controller and root view
- [x] Webpack & react/redux modules
- [x] `APIUtil` to interact with the API
- [x] Redux cycle for frontend authentication
- [x] User signup/signin components
- [x] Blank landing component after signup/signin
- [x] Style signup/signin components
- [x] Seed users

### Phase 2: User Profile Model, API, and components W8D4-W8D5 (2 days)

**Objective:** Basic Profiles can be read and edited through
the API.

- [x] Seed database with a small amount of test data
- [x] CRUD API for profiles (`ProfilesController`)
- [x] JBuilder views for Basic Profile
- [x] redux loop (create and update profile)
- [x] Basic Profile Components
- [x] Style Basic Profile components
- [x] Seed Basic Profile information

### Phase 3: Matching W9D1 (1 day)

**Objective:** User can browse matches based on location and preferences

- [x] `Match` components and respective redux loops
- [x] `MatchItem`  
- [x] Seed database with a small amount of test data
- [x] JBuilder views for browse page and MatchesIndexItems
- [x] `MatchItems` direct user to match profiles
- [x] `Match` filter
- [x] style the form
- [x] redux loop
- [x] Seed more users for matches

### Phase 5: Questions W9D2-W9D3 (2 day)
- [x] `Questions` model
- [x] `QuestionResponses` model
- [x] `QuestionOptions` model
- [x] `Questions` controller
- [x] `QuestionResponses` controller
- [x] `QuestionOptions` controller
- [x] Seed database with a small amount of test data
- [x] JBuilder views for Questions
- [x] Question components and redux loops
- [x] QuestionResponses components and redux loops
- [x] Style Question / QuestionResponses components
- [x] Seed Questions information
- [x] Get match percentage between users based on question responses
- [x] ReStyle `MatchesItem` to include match percentage


### Phase 6: Messages W9D4 (1 days)
- [x] `Conversations` model
- [x] `Messages` model
- [x] CRUD API: `Messages` controller
- [x] `Conversations` controller
- [x] JBuilder views for `ConversationsIndex`
- [x] JBuilder views for `ConversationsIndexItem`
- [x] JBuilder views for `Message`

### Phase 7: Advanced Styling, Refactoring, Flex Period W9D5 (1 day)

### Bonus Features (TBD)
- [x] Likes
- [ ] Blocking/hiding

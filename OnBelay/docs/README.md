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
- [ ] New account creation, login, and guest/demo login
- [ ] Browse and search other users by location and ‘looking for’
- [ ] Messaging
- [ ] Personality questions
- [ ] Match percentages based on question answers
- [ ] Production README
- [ ] Bonus: add likes
- [ ] Bonus: block or hide other users
- [ ] Bonus: mark importance of questions and weight accordingly in % match

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
- [ ] `APIUtil` to interact with the API
- [x] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users

### Phase 2: User Profile Model, API, and components W8D4-W8D5 (2 days)

**Objective:** Basic Profiles can be read and edited through
the API.

- [ ] Seed database with a small amount of test data
- [ ] CRUD API for profiles (`ProfilesController`)
- [ ] JBuilder views for Basic Profile
- [ ] redux loop (create and update profile)
- [ ] Basic Profile Components
- [ ] Style Basic Profile components
- [ ] Seed Basic Profile information

### Phase 3: Matching W9D1 (1 day)

**Objective:** User can browse matches based on location and preferences

- [ ] `MatchIndex` components and respective redux loops
+ [ ] `MatchIndexItem`  
- [ ] Seed database with a small amount of test data
- [ ] JBuilder views for browse page and MatchesIndexItems
- [ ] `MatchIndexItems` direct user to match profiles
- [ ] `MatchIndex` filter
+ [ ] style the form
+ [ ] redux loop
- [ ] Seed more users for matches

### Phase 5: Questions W9D2-W9D3 (2 day)
- [ ] `Questions` model
- [ ] `QuestionResponses` model
- [ ] `QuestionOptions` model
- [ ] `Questions` controller
- [ ] `QuestionResponses` controller
- [ ] `QuestionOptions` controller
- [ ] Seed database with a small amount of test data
- [ ] JBuilder views for Questions
- [ ] Question components and redux loops
- [ ] QuestionResponses components and redux loops
- [ ] Style Question / QuestionResponses components
- [ ] Seed Questions information
- [ ] Get match percentage between users based on question responses
- [ ] ReStyle `MatchesIndexItem` and `Profile` to include match percentage


### Phase 6: Messages W9D4 (1 days)
- [ ] `Conversations` model
- [ ] `Messages` model
- [ ] CRUD API: `Messages` controller
- [ ] `Conversations` controller
- [ ] JBuilder views for `ConversationsIndex`
- [ ] JBuilder views for `ConversationsIndexItem`
- [ ] JBuilder views for `Message`

### Phase 7: Advanced Styling, Refactoring, Flex Period W9D5 (1 day)

### Bonus Features (TBD)
- [ ] Likes
- [ ] Blocking/hiding

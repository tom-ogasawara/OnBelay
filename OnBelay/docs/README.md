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

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Browse and search other users by location and ‘looking for’
- [ ] Messaging
- [ ] Personality questions
- [ ] Match percentages based on question answers
- [ ] Production README [sample](docs/production_readme.md)
- [ ] Bonus: add likes
- [ ] Bonus: block or hide other users
- [ ] Bonus: mark importance of questions and weight accordingly in % match

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Basic Profile Model, API, and components (1 days)

**Objective:** Basic Profiles can be read and edited through
the API.

- [ ] Seed database with a small amount of test data
- [ ] CRUD API for profiles (`ProfilesController`)
- [ ] JBuilder views for Basic Profile
- [ ] redux loop (create and update profile)
- [ ] Basic Profile Components
- [ ] Style Basic Profile components
- [ ] Seed Basic Profile information

### Phase 3: Matching (1.5 day)

**Objective:** User can browse matches based on location, looking-for, and interests

- [ ] `MatchIndex` components and respective redux loops
+ [ ] `MatchIndexItem`  
- [ ] Seed database with a small amount of test data
- [ ] JBuilder views for browse page and MatchesIndexItems
- [ ] `MatchIndexItems` direct user to match profiles
- [ ] `MatchIndex` filter
+ [ ] style the form
+ [ ] redux loop
- [ ] Seed more users for matches

### Phase 4: Interests Model, API, and components (1 half day)

**Objective:** Interests can be read and edited through
the API.
- [ ] `Interests` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for profiles (`InterestsController`)
- [ ] JBuilder views for Interests
- [ ] update ProfilesComponents
- [ ] Style Interests component
- [ ] Seed Interests information


### Phase 5: Questions (2 day)
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
- [ ] ReStyle `MatchesIndexItem` and `Profile` to include match %


### Phase 6: Messages (2 days)
- [ ] `Conversations` model
- [ ] `Messages` model
- [ ] CRUD API: `Messages` controller
- [ ] `Conversations` controller
- [ ] JBuilder views for `ConversationsIndex`
- [ ] JBuilder views for `ConversationsIndexItem`
- [ ] JBuilder views for `Message`

### Phase 7: Advanced Styling, Refactoring, Flex Period (1 day)

### Bonus Features (TBD)
- [ ] Likes
- [ ] Availability

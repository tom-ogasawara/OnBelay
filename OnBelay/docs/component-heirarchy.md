**AuthformContainer**
  + AuthForm

**UserContainer**
  + Header nav

  + **MatchesContainer**
    + MatchesIndex
    + Filter: an array of Interest items
      * ProfileInterestForm (but styled differently)

  + MatchesIndex (appears in Browse and Likes)
    + MatchIndexItem (each match displayed in MatchesIndex, links to a profile)

  + **ProfileContainer**
    + **ProfileBasic** (from users table)
    + **ProfileInterest** (sidebar)
    + **ProfileAbout** (About tab)
    + **ProfileAvailability** (Bonus: Availability tab)
    + **ProfileQuestionIndex** (Questions tab)
      * ProfileQuestionItem

  + **ProfileFormContainer**
    + **ProfileBasicForm** (from users table)
    + **ProfileInterestForm** (sidebar)
    + **ProfileAboutForm** (About tab)
    + **ProfileAvailabilityForm** (Bonus: Availability tab)
    + **ProfileQuestionIndexForm** (Questions tab)
      * ProfileQuestionItemForm

  + **ConversationsContainer**
    + ConversationsIndex (all currentUser's conversations, displays under header)
      - ConversationIndexItem (preview a single conversation)

  + **MessageContainer**
      + MessagesIndex (single conversation -- a list of messages)
        - MessageIndexItem (one message)
      + NewMessageForm (add message to current chat)

  + **Bonus : LikesContainer**
    + MatchesIndex
    + Filter: by mutual liking

Routes

|Path   | Component   |
|-------|-------------|
|“/sign-up” | “AuthFormContainer"|
|“/sign-in” | “AuthFormContainer"|

|Path   | Component   |
|-------|-------------|
|“/” | “User" |
|“/profile” | “ProfileContainer" |
|“/profile/edit” | “ProfileFormContainer" |
|“/profile/questions” | “ProfileFormContainer" |
|“/profile/questions/:id"| “QuestionItem"|
|“/matches” | “MatchesContainer" |
|“/:username” | “ProfileContainer"|
|“/:username/about"| “About"| default to this
|“/:username/questions"| “QuestionIndex"|
|“/:username/questions/:id"| “QuestionItem"|
|“/conversations”| “ConversationContainer"|
|“/conversation/:conversation_id”| “MessageIndex"|
|“/likes”| “LikesContainer"|

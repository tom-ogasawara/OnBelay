## Sample State
```json
{
  currentUser: {
    id: 1,
    username: "TomOgasawara"
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
    answerQuestion: {errors: ["must select one option"]}
  },
  current_profile: {
    profile_info: {
      username: Sample_User_1,
      photo_url: "sample_picture_1.png",
      type: "Lead Climbing",
      location: "Location, CA",
      about: "Sample About Me."
    },
    looking_for: "All",
    questions: {
      1: {
        title: "Question 1?"
        answer: "Option 1",
        acceptable: "Option 1",
        importance: 1,
      }
    }
  },
  conversations: {
    1: {
      sender_id: 1,
      receiver_id: 2,
      messages: [
        1: {
        sender_id: 1,
        receiver_id: 2,
        content: "Sample message",
        timestamp: 2017-01-10 04:30:11
        },
        2: {
        sender_id: 2,
        receiver_id: 1,
        content: "Sample response",
        timestamp: 2017-01-10 04:33:19
        },
      ]
    },
  },
  likes : {},
  question: {},
  matches: {
    1: {
      username: Sample_User_2,
      photo_url: "sample_picture_2.png",
      type: "Bouldering",
      location: "Berkeley, CA"
    },
    2: {
      username: Sample_User_3,
      photo_url: "sample_picture_3.png",
      type: "Lead Climbing",
      location: "San Francisco, CA"
    },
  }
}
```

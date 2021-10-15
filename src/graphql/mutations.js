/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      user_name
      user_email
      top_score
      last_class
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      user_name
      user_email
      top_score
      last_class
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      user_name
      user_email
      top_score
      last_class
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createQuizOptions = /* GraphQL */ `
  mutation CreateQuizOptions(
    $input: CreateQuizOptionsInput!
    $condition: ModelQuizOptionsConditionInput
  ) {
    createQuizOptions(input: $input, condition: $condition) {
      id
      Opt1
      Opt2
      Opt3
      Opt4
      Answer
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateQuizOptions = /* GraphQL */ `
  mutation UpdateQuizOptions(
    $input: UpdateQuizOptionsInput!
    $condition: ModelQuizOptionsConditionInput
  ) {
    updateQuizOptions(input: $input, condition: $condition) {
      id
      Opt1
      Opt2
      Opt3
      Opt4
      Answer
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuizOptions = /* GraphQL */ `
  mutation DeleteQuizOptions(
    $input: DeleteQuizOptionsInput!
    $condition: ModelQuizOptionsConditionInput
  ) {
    deleteQuizOptions(input: $input, condition: $condition) {
      id
      Opt1
      Opt2
      Opt3
      Opt4
      Answer
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createQuizes = /* GraphQL */ `
  mutation CreateQuizes(
    $input: CreateQuizesInput!
    $condition: ModelQuizesConditionInput
  ) {
    createQuizes(input: $input, condition: $condition) {
      id
      Question
      complexity
      videosID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuizOptions {
        id
        Opt1
        Opt2
        Opt3
        Opt4
        Answer
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateQuizes = /* GraphQL */ `
  mutation UpdateQuizes(
    $input: UpdateQuizesInput!
    $condition: ModelQuizesConditionInput
  ) {
    updateQuizes(input: $input, condition: $condition) {
      id
      Question
      complexity
      videosID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuizOptions {
        id
        Opt1
        Opt2
        Opt3
        Opt4
        Answer
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteQuizes = /* GraphQL */ `
  mutation DeleteQuizes(
    $input: DeleteQuizesInput!
    $condition: ModelQuizesConditionInput
  ) {
    deleteQuizes(input: $input, condition: $condition) {
      id
      Question
      complexity
      videosID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      QuizOptions {
        id
        Opt1
        Opt2
        Opt3
        Opt4
        Answer
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createNotes = /* GraphQL */ `
  mutation CreateNotes(
    $input: CreateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    createNotes(input: $input, condition: $condition) {
      id
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateNotes = /* GraphQL */ `
  mutation UpdateNotes(
    $input: UpdateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    updateNotes(input: $input, condition: $condition) {
      id
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteNotes = /* GraphQL */ `
  mutation DeleteNotes(
    $input: DeleteNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    deleteNotes(input: $input, condition: $condition) {
      id
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createVideos = /* GraphQL */ `
  mutation CreateVideos(
    $input: CreateVideosInput!
    $condition: ModelVideosConditionInput
  ) {
    createVideos(input: $input, condition: $condition) {
      id
      filename
      category
      URL
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Quizes {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateVideos = /* GraphQL */ `
  mutation UpdateVideos(
    $input: UpdateVideosInput!
    $condition: ModelVideosConditionInput
  ) {
    updateVideos(input: $input, condition: $condition) {
      id
      filename
      category
      URL
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Quizes {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteVideos = /* GraphQL */ `
  mutation DeleteVideos(
    $input: DeleteVideosInput!
    $condition: ModelVideosConditionInput
  ) {
    deleteVideos(input: $input, condition: $condition) {
      id
      filename
      category
      URL
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Quizes {
        nextToken
        startedAt
      }
    }
  }
`;

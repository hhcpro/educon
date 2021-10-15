/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile {
    onCreateUserProfile {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile {
    onUpdateUserProfile {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile {
    onDeleteUserProfile {
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
export const onCreateQuizOptions = /* GraphQL */ `
  subscription OnCreateQuizOptions {
    onCreateQuizOptions {
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
export const onUpdateQuizOptions = /* GraphQL */ `
  subscription OnUpdateQuizOptions {
    onUpdateQuizOptions {
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
export const onDeleteQuizOptions = /* GraphQL */ `
  subscription OnDeleteQuizOptions {
    onDeleteQuizOptions {
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
export const onCreateQuizes = /* GraphQL */ `
  subscription OnCreateQuizes {
    onCreateQuizes {
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
export const onUpdateQuizes = /* GraphQL */ `
  subscription OnUpdateQuizes {
    onUpdateQuizes {
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
export const onDeleteQuizes = /* GraphQL */ `
  subscription OnDeleteQuizes {
    onDeleteQuizes {
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
export const onCreateNotes = /* GraphQL */ `
  subscription OnCreateNotes {
    onCreateNotes {
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
export const onUpdateNotes = /* GraphQL */ `
  subscription OnUpdateNotes {
    onUpdateNotes {
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
export const onDeleteNotes = /* GraphQL */ `
  subscription OnDeleteNotes {
    onDeleteNotes {
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
export const onCreateVideos = /* GraphQL */ `
  subscription OnCreateVideos {
    onCreateVideos {
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
export const onUpdateVideos = /* GraphQL */ `
  subscription OnUpdateVideos {
    onUpdateVideos {
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
export const onDeleteVideos = /* GraphQL */ `
  subscription OnDeleteVideos {
    onDeleteVideos {
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

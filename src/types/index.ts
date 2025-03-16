export interface loginProps {
  email: string;
  password: string;
}

export interface registerProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
  userId: string;
}

export interface AddPostData {
  caption: string;
  image: {
    uri: string;
    name: string;
    type: string;
  };
}

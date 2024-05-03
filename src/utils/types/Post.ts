export type TPostUser = {
    image: unknown,
    name: string,
    username: string,
    type?: 'Like' | 'Love' | 'Idea'
}

export type TPostComment =  {
    user: TPostUser,
    data: string,
  }

export type TPost = {
    id: string,
    user: TPostUser,
    timestamp: string,
    data: string,
    likes: TPostUser[],
    comments: TPostComment[],
  }
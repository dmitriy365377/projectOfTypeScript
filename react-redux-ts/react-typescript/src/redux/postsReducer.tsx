export interface PostsState {
    posts: number[]
}

const initialState = {
    posts: [],
    fetchedPosts: []
}

type Action = { type: "ADD_POST", payload: number }

export const postsReducer = (state: PostsState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_POST": {
            return { ...state, posts: [...state.posts, action.payload] }
        }
        default:
            return state
    }
}
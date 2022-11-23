import React from 'react';
import {ActionsTypes, newPostTextType, PostsType, StoreType} from "../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

// type MyPostsPropsType = {
//     posts: PostsType[]
//     newPostText: newPostTextType
//     dispatch: (action: ActionsTypes) => void
// }

const MyPostsContainer = (/*props: MyPostsPropsType*/) => {

    // let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    //
    // let newPostElementRef = React.createRef<HTMLTextAreaElement>();

    // const addPost = () => {
    //
    //     // if (newPostElementRef.current) {
    //     // let text = newPostElementRef.current.value;
    //
    //     // props.addPost(props.newPostText);
    //     props.dispatch(addPostAC(props.newPostText)) //Как в видео у Димыча props.store... не могу сделать, сам store мне сюда не приходит, приходят его части
    //
    //     // newPostElementRef.current.value = '';
    //     // props.updateNewPostText('');
    //     // }
    // }
    //
    // const onPostChange = (text: string) => {
    //     // if (newPostElementRef.current) {
    //     //     let text = newPostElementRef.current.value;
    //     //     // props.updateNewPostText(text);
    //     //     props.dispatch(updateNewPostTextAC(text))
    //     // }
    //     props.dispatch(updateNewPostTextAC(text))
    // }

    return (
        <StoreContext.Consumer>{
            (store) => {

                const addPost = () => {
                    store.dispatch(addPostAC(store.getState().profilePage.newPostText))
                }

                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }

                return <MyPosts
                    posts={store.getState().profilePage.posts} // store._state.profilePage.posts //props.posts
                    newPostText={store.getState().profilePage.newPostText} //props.newPostText
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                />
            }
        }

        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;
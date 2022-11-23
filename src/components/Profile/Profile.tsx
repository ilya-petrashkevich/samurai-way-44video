import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, newPostTextType, PostsType, StoreType} from "../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// type ProfilePropsType = {
//     profilePage: {
//         posts: PostsType[]
//         newPostText: newPostTextType
//     }
//     dispatch: (action: ActionsTypes) => void
// }

const Profile = (/*props: ProfilePropsType*/) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // posts={props.profilePage.posts}
                // newPostText={props.profilePage.newPostText}
                // dispatch={props.dispatch}
            />

            {/*<MyPosts*/}
            {/*    posts={props.profilePage.posts}*/}
            {/*    newPostText={props.profilePage.newPostText}*/}
            {/*    dispatch={props.dispatch}*/}
            {/*    // updateNewPostText={props.updateNewPostText}*/}
            {/*    // addPost={props.addPost}*/}
            {/*/>*/}
        </div>
    )
};

export default Profile;
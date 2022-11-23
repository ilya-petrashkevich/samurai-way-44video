import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    DialogsType,
    MessagesType,
    newMessageBodyType
} from "../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../redux/dialogs-reduser"
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';

// type DialogsContainerPropsType = {
//     dialogs: DialogsType[]
//     messages: MessagesType[]
//     newMessageBody: newMessageBodyType
//     dispatch: (action: ActionsTypes) => void
// }

const DialogsContainer = (/*props: DialogsContainerPropsType*/) => {
    //
    // let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    //
    // let messagesElements = props.messages.map(m => <Message message={m.message}/>);
    //
    // let newMessageBody = props.newMessageBody;

    // let onSendMessageClick = () => {
    //     props.dispatch(sendMessageAC())
    // }
    // let onNewMessageChange = (body: string /*e: ChangeEvent<HTMLTextAreaElement>*/) => {
    //
    //     props.dispatch(updateNewMessageBodyAC(body));
    // }

    return (
        <StoreContext.Consumer>{
            (store) => {

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }
                let onNewMessageChange = (body: string /*e: ChangeEvent<HTMLTextAreaElement>*/) => {

                    store.dispatch(updateNewMessageBodyAC(body));
                }

                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogs={store.getState().dialogsPage.dialogs} //props.dialogs
                    messages={store.getState().dialogsPage.messages} //props.messages
                    newMessageBody={store.getState().dialogsPage.newMessageBody} //props.newMessageBody
                />
            }
        }</StoreContext.Consumer>

        // <Dialogs
        //     updateNewMessageBody={onNewMessageChange}
        //     sendMessage={onSendMessageClick}
        //     dialogs={props.dialogs}
        //     messages={props.messages}
        //     newMessageBody={props.newMessageBody}
        // />
    );
};

export default DialogsContainer;
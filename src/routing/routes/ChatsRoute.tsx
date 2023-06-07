import ChatPage from "../../pages/chats/ChatPage";
import DefaultChatPage from "../../pages/chats/DefaultChatPage";
import Chat from "../layouts/chat";
import ErrorPage from "../layouts/error-page";

const ChatsRoute = {
    path: '/chats',
    element: <Chat />,
    errorElement: <ErrorPage />,
    children:
        [
            {
                path: '/chats',
                element: <DefaultChatPage/>
            }
            ,
            {
                path: '/chats/:id',
                element: <ChatPage/>
            }
        ]
}

export default ChatsRoute;
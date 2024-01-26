import { StreamChat, User } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
// other imports
import "stream-chat-react/dist/css/v2/index.css";
import "./layout.css";

import "stream-chat-react/dist/css/v2/index.css";

const userId = "gentle-boat-4";
const userName = "gentle-boat-4";

const user: User = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
};

const apiKey = "hjejg7nm75k6";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ2VudGxlLWJvYXQtNCJ9.zwIxfuDXR9FrTgO6KPlM-3saIabw_Yj4Jpypvka5eZc";

const chatClient = new StreamChat(apiKey);
chatClient.connectUser(user, userToken);

const App = () => (
  <Chat client={chatClient} theme="str-chat__theme-light">
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;

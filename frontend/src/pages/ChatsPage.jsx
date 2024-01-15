import { PrettyChatWindow } from "react-chat-engine-pretty";
const PROJECT_ID = import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID;

const ChatsPage = ({ user }) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={PROJECT_ID}
        username={user.username}
        secret={user.secret}
      />
    </div>
  );
};

export default ChatsPage;

import React from 'react';
import { styles } from '../styles';
import ChatEngine from './ChatEngine';
import EmailForm from './EmailForm';

const SupportWindow = (props) => {
  const [user, setUser] = React.useState(null);
  const [chat, setChat] = React.useState(null);
  return (
    <div
      className="transition-5"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? '1' : '0' },
      }}>
      <EmailForm
        setUser={(user) => setUser(user)}
        setChat={(chat) => setChat(chat)}
        visible={user === null || chat === null}
      />

      <ChatEngine visible={user !== null && chat !== null} chat={chat} user={user} />
    </div>
  );
};

export default SupportWindow;

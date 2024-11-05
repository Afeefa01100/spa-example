import React, { useEffect, useState } from 'react';
import { eventBus, sendMessage } from 'rootConfig/eventBus';

export default function App2() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const subscription = eventBus.subscribe((msg) => {
      if (msg.source === 'app1') setMessage(msg.data);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSendMessage = () => {
    sendMessage({ source: 'app2', data: 'Hello from App2!' });
  };

  return (
    <div>
      <h1>App2</h1>
      <button onClick={handleSendMessage}>Send Message to App1</button>
      <p>Message from App1: {message}</p>
    </div>
  );
}

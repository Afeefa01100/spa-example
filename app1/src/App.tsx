import React, { useEffect, useState } from 'react';
import { eventBus, sendMessage } from 'rootConfig/eventBus';

export default function App1() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const subscription = eventBus.subscribe((msg) => {
      if (msg.source === 'app2') setMessage(msg.data);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSendMessage = () => {
    sendMessage({ source: 'app1', data: 'Hello from App1!' });
  };

  return (
    <div>
      <h1>App1</h1>
      <button onClick={handleSendMessage}>Send Message to App2</button>
      <p>Message from App2: {message}</p>
    </div>
  );
}

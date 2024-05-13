import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";

const API_KEY = "sk-proj-rUarJZ1nWHmTkduokA9IT3BlbkFJsO73jWTwE1bRVNkJuatn";

const systemMessage = { //  Podemos dizer ao ChatGPT a forma de como queremos que ele dê as respostas... por exemplo, se o site for para crianças "Explica as coisas como se estivesses a falar com uma criança"
    "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
  }
  
  function AI() {
    const [messages, setMessages] = useState([
      {
        message: "Olá, em que posso ajudar?",
        sentTime: "just now",
        sender: "ChatGPT"
      }
    ]);

    const [isTyping, setIsTyping] = useState(false);
  
    const handleSend = async (message) => {
      const newMessage = {
        message,
        direction: 'outgoing',
        sender: "user"
      };
  
      const newMessages = [...messages, newMessage];  //Todas as mensagens que estão para trás + a nova mensagem
      setMessages(newMessages);           //Dá update às mensagens
      setIsTyping(true);                //quando o ChatGPT está a escrever aparece ChatGPT está a escrever...
      await processMessageToChatGPT(newMessages);
    };
  
    async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
  
  
      let apiMessages = chatMessages.map((messageObject) => {  //Tem o objetivo de traduzir para o ChatGPT conseguir entender
        let role = "";
        if (messageObject.sender === "ChatGPT") {  //definir quem está a mandar a mensagem
          role = "assistant";
        } else {
          role = "user";
        }
        return { role: role, content: messageObject.message}  //Escrever     Usuário ou ChatGPT: (mensagem)
      });
  
      const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
          systemMessage,  // Mensagem que explica ao ChatGPT a forma como ele tem de responder
          ...apiMessages // Mensagens do nosso chat com o ChatGPT
        ]
      }
      
      await fetch("https://api.openai.com/v1/chat/completions", 
{
  method: "POST",
  headers: {
    "Authorization": "Bearer " + API_KEY,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(apiRequestBody)
}).then((data) => {
  return data.json();
}).then((data) => {
  console.log(data);
  setMessages([...chatMessages, {
    message: data.choices[0].message.content,
    sender: "ChatGPT"
  }]);
  setIsTyping(false);  //A resposta do ChatGPT para o utilizador já foi enviado por isso pode parar de aparecer "ChatGPT está a escrever..."
});
}


return (
<div className="AI">
<div style={{ display: "flex", "justify-content": "center"}}>
  <MainContainer>
    <ChatContainer>       
      <MessageList 
        scrollBehavior="smooth" 
        typingIndicator={isTyping ? <TypingIndicator content="ChatGPT está a escrever..." /> : null}
      >
        {messages.map((message, i) => {
          console.log(message)
          return <Message key={i} model={message} />
        })}
      </MessageList>
      <MessageInput placeholder="Escreve aqui" onSend={handleSend} />        
    </ChatContainer>
  </MainContainer>
</div>
</div>
)
}

export default AI
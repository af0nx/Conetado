
/*const FAQ = () => {

    return (
<div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>
    
            <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
                <div className="flex justify-between md:flex-row flex-col">
                    <div className="md:mb-0 mb-8 md:text-left text-center">
                        <h2 className="font-medium dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">Questions</h2>
                        <p className="font-normal dark:text-gray-300 text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">If you don’t find your answer, Please contact us or Leave a Message, we’ll be more than happy to assist you.</p>
                    </div>
    
                    <div className="flex justify-center items-center">
                        <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
                            <input className="focus:outline-none bg-white" type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-8/12 w-full mx-auto">
                <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
    
                <div className="w-full md:px-6">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800"><span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> How do i know if a product is available in boutiques?</p>
                        </div>

                    </div>
                    <div id="menu" className="hidden mt-6 w-full">
                        <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>
    
    
                <hr className="w-full lg:mt-10 my-8" />
    
                <div className="w-full md:px-6">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800"><span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q2.</span> How can i find the prices or get other information about chanel products?</p>
                        </div>

                    </div>
                    <div id="menu" className="hidden mt-6 w-full">
                        <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>
    
    
                <hr className="w-full lg:mt-10 my-8" />
    
                <div className="w-full md:px-6">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800"><span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q3.</span>How many collections come out every year?</p>
                        </div>

                    </div>
                    <div id="menu" className="hidden mt-6 w-full">
                        <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>
    
    
                <hr className="w-full lg:mt-10 my-8" />
    
                <div className="w-full md:px-6">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800"><span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q4.</span>Are all of the fashion collections features on the website?</p>
                        </div>

                    </div>
                    <div id="menu" className="hidden mt-6 w-full">
                        <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>
    
    
                <hr className="w-full lg:mt-10 my-8" />
    
                <div className="w-full md:px-6">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800"><span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q5.</span>Where do i find products that i have seen in magazines or Social Media?</p>
                        </div>

                    </div>
                    <div id="menu" className="hidden mt-6 w-full">
                        <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>
    
                <hr className="w-full lg:mt-10 my-8" />
            </div>
        </div>

);
};
*/

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

//export default FAQ;
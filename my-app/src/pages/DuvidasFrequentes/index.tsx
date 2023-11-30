// FAQPage.js
import React from "react";
import "./style.scss"; // Certifique-se de ter o arquivo de estilo correspondente
import Footer from "../../components/Footer";

const FAQPage = () => {
  const faqData = [
    {
      question: "Minhas informações estão seguras?",
      answer:
        "Sim, suas informações são mantidas de forma segura em nosso sistema.",
    },
    {
      question: "Consigo fazer backup dos meus dados?",
      answer:
        "Sim, oferecemos a opção de fazer backup dos seus dados regularmente.",
    },
    {
      question: "Posso controlar minhas finanças pessoais e do meu negócio?",
      answer:
        "Sim, nosso sistema permite o controle de finanças pessoais e empresariais.",
    },
    {
      question: "O sistema recebe atualizações frequentes?",
      answer:
        "Sim, nosso sistema é atualizado regularmente para fornecer melhorias e novos recursos.",
    },
    {
      question: "Consigo controlar meus investimentos e meus ativos?",
      answer:
        "Sim, você pode controlar seus investimentos e ativos usando nossa plataforma.",
    },
  ];

  return (
    <div className="ContainerMain">
      <div className="faq-container">
        <h1>Dúvidas Frequentes</h1>
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FAQPage;



import React, { useState } from 'react';
import styles from './Faq.module.css'; 

function FAQ() {
  const [answersVisible, setAnswersVisible] = useState({});

  
  const toggleAnswer = (question) => {
    setAnswersVisible({
      ...answersVisible,
      [question]: !answersVisible[question],
    });
  };

  const faqData = [
    {
      question: 'How do I sign up?',
      answer: '',
    },
    {
      question: 'What methods of payment do you accept?',
      answer: '',
    },
    {
      question: 'How do I cancel my subscription?',
      answer: '',
    },
    {
      question: 'What do you mean by services allotted?',
      answer: '',
    },
    {
      question: 'How do I retrieve my username or password?',
      answer: '',
    },
    {
      question: 'What if I don\'t pay my subscription fees?',
      answer: '',
    },
    {
      question: 'How do I update my account information?',
      answer: '',
    },
    {
      question: 'What if I\'m not satisfied with your service engineer?',
      answer: '',
    },
    {
      question: 'How will I benefit by subscribing to your service?',
      answer: '',
    },
    {
      question: 'Will you add more types of services in your package?',
      answer: '',
    },
  ];

  return (
    <div>
      <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <div className={styles.questionContainer}>
            <span>{item.question}</span>
            <span onClick={() => toggleAnswer(item.question)} className={styles.plusSign}>
              {answersVisible[item.question] ? '-' : '+'}
            </span>
          </div>
          {answersVisible[item.question] && (
            <div className={styles.answerContainer}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;

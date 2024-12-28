import React from 'react';
import HeaderAskQuestion from '../Components/headerQuestion.jsx';

import QuestionForm from '../Components/QuestionForm';

const QuestionPage = () => {
  return (
    <div>
      <HeaderAskQuestion />
      <QuestionForm />
      <div className='tempofooter'></div>
    </div>
  );
};

export default QuestionPage;

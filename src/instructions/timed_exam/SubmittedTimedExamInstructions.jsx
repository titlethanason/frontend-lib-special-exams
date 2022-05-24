import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import ExamStateContext from '../../context';

const SubmittedTimedExamInstructions = () => {
  const state = useContext(ExamStateContext);

  return (
    <h3 className="h3" data-testid="exam.submittedExamInstructions.title">
      {state.timeIsOver
        ? (
          <FormattedMessage
            id="exam.submittedExamInstructions.overtimeTitle"
            defaultMessage="เวลาที่กำหนดสำหรับการสอบนี้หมดลงแล้ว. ข้อสอบของคุณได้ถูกส่งเรียบร้อยและจะถูกให้คะแนนตามข้อสอบที่ทำเสร็จสมบูรณ์."
          />
        )
        : (
          <FormattedMessage
            id="exam.submittedExamInstructions.title"
            defaultMessage="คุณได้ส่งข้อสอบเรียบร้อยแล้ว."
          />
        )}
    </h3>
  );
};

export default SubmittedTimedExamInstructions;

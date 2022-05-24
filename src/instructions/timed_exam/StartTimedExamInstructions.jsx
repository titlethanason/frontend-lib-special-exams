import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import ExamStateContext from '../../context';

const StartTimedExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { exam, startTimedExam } = state;
  const examDuration = exam.total_time;

  return (
    <>
      <div className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.startExamInstructions.title"
          defaultMessage="ช้อสอบนี้เป็นข้อสอบจับเวลา ({examDuration})"
          values={{ examDuration }}
        />
      </div>
      <p>
        <FormattedMessage
          id="exam.startExamInstructions.text1"
          defaultMessage="การสอบนี้มีกำหนดเวลามาเกี่ยวข้อง. "
        />
        <strong>
          <FormattedMessage
            id="exam.startExamInstructions.text2"
            defaultMessage="เพื่อผ่านการสอบนี้ คุณจะต้องทำข้อสอบให้เสร็จภายในเวลาที่กำหนด. "
          />
        </strong>
        <FormattedMessage
          id="exam.startExamInstructions.text3"
          defaultMessage={'หลังจากคุณกด "ฉันพร้อมที่จะทำข้อสอบนี้แล้ว", '
          + 'คุณจะมีเวลา {examDuration} เพื่อทำข้อสอบให้เสร็จสมบูรณ์.'}
          values={{ examDuration }}
        />
      </p>
      <Button
        data-testid="start-exam-button"
        variant="outline-primary"
        onClick={startTimedExam}
      >
        <FormattedMessage
          id="exam.startExamInstructions.startExamButtonText"
          defaultMessage="ฉันพร้อมที่จะทำข้อสอบนี้แล้ว."
        />
      </Button>
    </>
  );
};

export default StartTimedExamInstructions;

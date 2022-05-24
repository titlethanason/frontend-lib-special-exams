import React, { useContext } from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import ExamStateContext from '../../context';

const SubmitTimedExamInstructions = () => {
  const state = useContext(ExamStateContext);
  const { submitExam } = state;

  return (
    <>
      <h3 className="h3" data-testid="exam-instructions-title">
        <FormattedMessage
          id="exam.submitExamInstructions.title"
          defaultMessage="คุณแน่ใจหรือไม่ว่าต้องการส่งข้อสอบ?"
        />
      </h3>
      <p>
        <FormattedMessage
          id="exam.submitExamInstructions.warningText"
          defaultMessage='ตรวจสอบให้แน่ใจว่าคุณได้กด "ยอมรับ" สำหรับข้อสอบในแต่ละข้อก่อนที่จะส่งข้อสอบ.'
        />
      </p>
      <p>
        <FormattedMessage
          id="exam.submitExamInstructions.text"
          defaultMessage="หลังจากส่งข้อสอบแล้ว ข้อสอบจะถูกให้คะแนน."
        />
      </p>
      <Button variant="primary" onClick={submitExam} className="mr-2" data-testid="end-exam-button">
        <FormattedMessage
          id="exam.submitExamInstructions.submit"
          defaultMessage="ใช่, ส่งข้อสอบของฉัน."
        />
      </Button>
    </>
  );
};

export default SubmitTimedExamInstructions;

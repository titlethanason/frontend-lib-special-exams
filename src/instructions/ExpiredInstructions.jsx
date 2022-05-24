import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Container } from '@edx/paragon';

const ExpiredExamInstructions = () => (
  <Container className="border py-5 mb-4 bg-warning-100">
    <h3 className="h3" data-testid="expired-exam-instructions-title">
      <FormattedMessage
        id="exam.ExpiredExamInstructions.title"
        defaultMessage="เวลาที่ครบกำหนดสำหรับการสอบนี้ผ่านไปแล้ว"
      />
    </h3>
    <p>
      <FormattedMessage
        id="exam.ExpiredExamInstructions.body"
        defaultMessage="เนื่องจากเลยเวลาที่ครบกำหนดแล้ว คุณจึงไม่สามารถทำข้อสอบนี้ได้อีกต่อไป."
      />
    </p>
  </Container>
);

export default ExpiredExamInstructions;

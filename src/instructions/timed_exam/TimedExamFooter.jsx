import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

const TimedExamFooter = () => (
  <div className="footer-sequence">
    <div className="h4">
      <FormattedMessage
        id="exam.startExamInstructions.footerTitle"
        defaultMessage="ฉันขอเวลาเพิ่มเติมเพื่อทำข้อสอบของฉันได้หรือไม่?"
      />
    </div>
    <p>
      <FormattedMessage
        id="exam.startExamInstructions.footerText"
        defaultMessage={'หากคุณมีเงื่อนไขความพิการ, '
        + 'คุณอาจมีสิทธิ์ได้รับวลาเพิ่มเติมในการสอบตามกำหนดเวลา. '
        + 'สอบถามทีมงานหลักสูตรสำหรับข้อมูลเกี่ยวกับเวลาเพิ่มเติม.'}
      />
    </p>
  </div>
);

export default TimedExamFooter;

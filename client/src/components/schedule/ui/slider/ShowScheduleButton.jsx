import React, { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const ScheduleButton = ({ view, setView, value }) => {
  const [valueTranslate, setValueTranslate] = useState(value);

  useEffect(() => {
    switch (value) {
        case 'day':
          setValueTranslate('день');
          break;
        case 'week':
          setValueTranslate('тиждень');
          break;
        case 'month':
          setValueTranslate('місяць');
          break;
        default:
          setValueTranslate(value);
      }
    }, [value]);

  return (
    <span
      onClick={() => setView(value)}
      onKeyDown={() => setView(value)}
      role='button'
      tabIndex={0}
      className={`filter-schedule-link ${
        view === value ? 'filter-schedule-link__active' : null
      }`}
    >
      {valueTranslate}
    </span>
  );
};

export default ScheduleButton;

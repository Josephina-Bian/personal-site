import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-11-20T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};



const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'media',
    label: 'Days without social media',
    value: 0,
    link:
      'https://www.xiaohongshu.com/user/profile/5aca5e7a11be10149032cee0',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Los Angeles, CA ',
  },
];

export default data;

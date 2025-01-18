import React from 'react';
import ButtonCard from './ButtonCard';

const Button = () => {
  const buttons = [
    {
      label: 'Primary',
      color: 'bg-blue-500',
      code: `<button className="bg-blue-500 text-white px-4 py-2 rounded">Primary</button>`,
    },
    {
      label: 'Success',
      color: 'bg-green-500',
      code: `<button className="bg-green-500 text-white px-4 py-2 rounded">Success</button>`,
    },
    {
      label: 'Danger',
      color: 'bg-red-500',
      code: `<button className="bg-red-500 text-white px-4 py-2 rounded">Danger</button>`,
    },
    {
      label: 'Warning',
      color: 'bg-yellow-500',
      code: `<button className="bg-yellow-500 text-white px-4 py-2 rounded">Warning</button>`,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {buttons.map((button, index) => (
        <ButtonCard
          key={index}
          label={button.label}
          color={button.color}
          code={button.code}
        />
      ))}
    </div>
  );
};

export default Button;

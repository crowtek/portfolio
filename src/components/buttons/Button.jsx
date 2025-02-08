import React from 'react';

export const LinkButton = ({ text, link, type }) => {
  const styles =
    type === 'primary'
      ? 'bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]'
      : 'border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10';

  return (
    <a href={link} className={styles}>
      {text}
    </a>
  );
};

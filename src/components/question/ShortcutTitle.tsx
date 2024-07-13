import React from 'react';

type ShortcutBoxProps = {
  title: string;
};

const ShortcutTitle: React.FC<ShortcutBoxProps> = ({ title }) => {
  return (
    <div className="flex flex-shrink items-center overflow-hidden">
      <div className="truncate">{title}</div>
    </div>
  );
};

export default ShortcutTitle;

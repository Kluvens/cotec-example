import React from 'react';

type ShortcutBoxProps = {
  shortcut: string;
};

const ShortcutBox: React.FC<ShortcutBoxProps> = ({ shortcut }) => {
  return (
    <div className="my-2 p-1 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize token-text-secondary min-w-[50px]">
      <span className="text-sm">{shortcut}</span>
    </div>
  );
};

export default ShortcutBox;

import React from 'react';
import Link from 'next/link';
type MagneticButtonProps = {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  LinkTo:string
};

const MagneticButton: React.FC<MagneticButtonProps> = ({ className, children ,LinkTo , onClick}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const position = btn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    btn.children[0].setAttribute(
      'style',
      `transform: translate(${x * 0.3}px, ${y * 0.5}px)`
    );
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    btn.children[0].setAttribute('style', 'transform: translate(0px, 0px)');
  };

  return (
    <Link
      href={LinkTo}
      className={`Magneticbtns `}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    >
      <span className={`relative inline-block w-[240px] 
      py-[18px]  rounded-xl ${className} `} >{children}</span>
    </Link>
  );
};

export default MagneticButton;
'use client';

import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

const Button = ({
  children,
  type = 'solid',
  className,
  icon: Icon,
  href,
  disabled = false,
  onClick,
  ...props
}) => {
  const buttonStyle = classNames(
    'flex justify-center items-center gap-3 rounded-md py-1.5 text-sm/6 font-semibold box-border transition-colors duration-200',
    {
      'bg-indigo-600 text-white hover:bg-indigo-700': type === 'solid',
      'border border-gray-300 border-solid text-gray-700 hover:border-gray-400 hover:bg-gray-50': type === 'outline',
      'text-gray-600 hover:text-gray-900': type === 'ghost',
      'px-3': !className?.includes('px-0'),
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  )

  const content = (
    <>
      {Icon && <Icon size={20} className="flex-shrink-0" />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={buttonStyle}
        {...props}
      >
        {content}
      </Link>
    )
  }

  return (
    <button 
      className={buttonStyle}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      type="button"
      {...props}
    >
      {content}
    </button>
  )
}

export default Button
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

const Logo = ({ size = 10 }) => {
  return (
    <Image
            alt="Your Company"
            src="/images/pattern/common/logo.svg"
            width={40} height={40}
            className={classNames('mx-auto w-auto', `h-${size}`)}
          />
  )
}

export default Logo
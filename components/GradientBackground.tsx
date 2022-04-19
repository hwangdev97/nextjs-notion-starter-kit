import * as React from 'react'

import styles from './styles.module.css'

export const GraidentBackground = () => {
  return (
    <div className={styles.gradient}>
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <rect
          width='150%'
          height='150%'
          x='-65%'
          y='-65%'
          fill='url(#gradient1a)'
        ></rect>
        <rect
          width='200%'
          height='200%'
          x='10%'
          y='-80%'
          fill='url(#gradient1b)'
        ></rect>
        <rect
          width='200%'
          height='150%'
          x='-50%'
          y='30%'
          fill='url(#gradient1c)'
        ></rect>
        <defs>
          <radialGradient id='gradient1a'>
            <stop offset='0%' stopColor='#F2C9C9'>
              <animate
                attributeName='stop-color'
                values='#F2C9C9;#FFFFFF;#DCD5F5;#FFE7C1;#FFFFFF;#FFE7C1;#F2C9C9'
                dur='20s'
                repeatCount='indefinite'
              ></animate>
            </stop>
            <stop offset='100%' stopColor='#FFFFFF'></stop>
          </radialGradient>
          <radialGradient id='gradient1b'>
            <stop offset='0%' stopColor='#CBEBF0'>
              <animate
                attributeName='stop-color'
                values='#CBEBF0;#DCD5F5;#FFFFFF;#CBEBF0;#DCD5F5;#FFFFFF;#CBEBF0'
                dur='20s'
                repeatCount='indefinite'
              ></animate>
            </stop>
            <stop offset='100%' stopColor='#FFFFFF' stopOpacity='0'></stop>
          </radialGradient>
          <radialGradient id='gradient1c'>
            <stop offset='0%' stopColor='#FFFFFF'>
              <animate
                attributeName='stop-color'
                values='#FFFFFF;#FFE7C1;#F2C9C9;#FFFFFF;#CBEBF0;#F2C9C9;#FFFFFF'
                dur='20s'
                repeatCount='indefinite'
              ></animate>
            </stop>
            <stop offset='100%' stopColor='#FFFFFF' stopOpacity='0'></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

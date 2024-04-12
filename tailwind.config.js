/** @type {import("tailwindcss").Config} */
import { nextui } from '@nextui-org/react';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 4s ease-in-out infinite', // '动画名称 持续时间 动画方式 重复次数'
        'float-reverse': 'float-reverse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
};

import type { ComponentPropsWithoutRef, ReactElement } from 'react';

export const PlusButton = (props: ComponentPropsWithoutRef<'button'>): ReactElement => (
  <button
    {...props}
    className="rounded-lg items-center transition-colors justify-center flex h-10 w-full hover:bg-purple-200 dark:hover:bg-purple-950/50"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-700" viewBox="0 0 24 24">
      <g fill="none" stroke="#e7c2ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path strokeDasharray={64} strokeDashoffset={64} d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
        </path>
        <path strokeDasharray={12} strokeDashoffset={12} d="M7 12h10">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"></animate>
        </path>
        <path strokeDasharray={12} strokeDashoffset={12} d="M12 7v10">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"></animate>
        </path>
      </g>
    </svg>
  </button>
)
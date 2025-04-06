const paws = [
  // Lado izquierdo (x: 0-22, y: 0-97)
  { x: 2, y: 10, size: 8, rotation: 12 },
  { x: 5, y: 28, size: 7, rotation: -17 },
  { x: 8, y: 34, size: 9, rotation: 23 },
  { x: 12, y: 50, size: 6, rotation: -45 },
  { x: 15, y: 60, size: 10, rotation: 67 },
  { x: 18, y: 25, size: 8, rotation: -89 },
  { x: 20, y: 42, size: 7, rotation: 102 },
  { x: 22, y: 35, size: 9, rotation: -123 },
  { x: 3, y: 72, size: 6, rotation: 145 },
  { x: 7, y: 90, size: 10, rotation: -167 },
  { x: 10, y: 80, size: 11, rotation: 189 },
  { x: 13, y: 65, size: 7, rotation: -200 },
  { x: 16, y: 40, size: 9, rotation: 34 },
  { x: 19, y: 20, size: 8, rotation: -56 },
  { x: 21, y: 55, size: 12, rotation: 78 },
  { x: 4, y: 75, size: 6, rotation: -91 },
  { x: 6, y: 30, size: 10, rotation: 113 },
  { x: 9, y: 85, size: 7, rotation: -134 },
  { x: 11, y: 15, size: 9, rotation: 156 },
  { x: 8, y: 60, size: 8, rotation: -178 },
  { x: 14, y: 95, size: 11, rotation: 200 },
  { x: 15, y: 10, size: 6, rotation: -23 },
  { x: 10, y: 70, size: 10, rotation: 45 },
  { x: 1, y: 45, size: 7, rotation: -67 },
  { x: 5, y: 25, size: 9, rotation: 89 },

  // Lado derecho (x: 67-99, y: 0-97)
  { x: 85, y: 52, size: 6, rotation: -45 },
  { x: 95, y: 30, size: 10, rotation: 67 },
  { x: 82, y: 44, size: 8, rotation: -89 },
  { x: 85, y: 27, size: 7, rotation: 102 },
  { x: 88, y: 55, size: 9, rotation: -123 },
  { x: 91, y: 68, size: 6, rotation: 145 },
  { x: 94, y: 80, size: 10, rotation: -167 },
  { x: 97, y: 10, size: 11, rotation: 189 },
  { x: 76, y: 10, size: 12, rotation: 78 },
  { x: 79, y: 85, size: 6, rotation: -91 },
  { x: 82, y: 30, size: 10, rotation: 113 },
  { x: 85, y: 50, size: 7, rotation: -134 },
  { x: 88, y: 15, size: 9, rotation: 156 },
  { x: 91, y: 65, size: 8, rotation: -178 },
  { x: 94, y: 90, size: 11, rotation: 200 },
  { x: 97, y: 20, size: 6, rotation: -23 },
  { x: 79, y: 55, size: 8, rotation: 123 },
  { x: 82, y: 25, size: 6, rotation: -145 },
  { x: 85, y: 60, size: 10, rotation: 167 },
  { x: 88, y: 40, size: 7, rotation: -189 },
  { x: 91, y: 75, size: 9, rotation: 200 },
  { x: 94, y: 85, size: 8, rotation: -34 },
  { x: 97, y: 15, size: 12, rotation: 56 },
  { x: 79, y: 70, size: 8, rotation: -156 },
  { x: 82, y: 20, size: 11, rotation: 178 },
  { x: 85, y: 90, size: 6, rotation: -200 }
];

export const PawBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden bg-white transition-colors duration-300 ease-in-out dark:bg-[#10061d] xl:block">
    <svg className="absolute h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {paws.map((paw, index) => (
        <g
          key={index}
          transform={`translate(${paw.x}, ${paw.y}) rotate(${paw.rotation}) scale(${paw.size / 200})`}
          className="fill-current text-purple-300 opacity-90 blur-[1px] dark:text-purple-950"
        >
          <path d="M20.5,15.3c3.1,1.1,6.9-1.2,8.4-5.4c1.5-4.1,0.2-8.4-2.9-9.6c-3.1-1.2-6.9,1.3-8.4,5.4C16,9.8,17.4,13.7,20.5,15.3z" />
          <path d="M8.5,21.9c3.3-0.3,5.7-4,5.3-8.4C10,9,7.1,5.3,4.2,5.6C1.2,8.5,4.1,12.1,4.1,16C4.1,18.9,6.3,22.1,8.5,21.9z" />
          <path d="M34.2,21.8c2.9,1.7,7.1,0,9.3-3.8c2.2-3.8,1.7-8.3-1.2-9.9c-2.9-1.7-7.1,0.1-9.3,3.8C30.8,15.6,31.3,20.8,34.2,21.8z" />
          <path d="M49.7,26.3c-1.9-2.7-6.3-2.9-9.9-0.5c-3.6,2.5-5,6.7-3.1,9.4c1.9,2.7,6.3,2.9,9.9,0.5C50.1,34.2,52,30.2,49.7,26.3z" />
          <path d="M30.4,26.8c-0.4-2.5-1.9-4.7-4.3-5.8c-2.4-1.1-5.1-0.9-7.3,0.4c-2.4,1.4-3.9,3.3-5.9,4.1c-2,0.8-7.7-1.6-11.3,4.8c-2.5,4.6-0.2,10.3,4.5,12.5c3.6,1.7,6.4,1.5,8.5,2.5c2.1,1,3.7,3.3,7.3,5c4.7,2.2,10.6,0.3,12.5-4.5c2.7-6.8-2.8-9.7-3.5-11.8C29.5,31.8,30.9,29.5,30.4,26.8z" />
        </g>
      ))}
    </svg>
  </div>
);

export default PawBackground;

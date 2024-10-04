import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';
export const ShareIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
<svg 
  fill="none"
  stroke-width="2"
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-refresh w-4 h-4"
  stroke={props.color ?? defaultButtonColor}
  stroke-linecap="round" 
  stroke-linejoin="round" 
  viewBox="0 0 24 24" 
  width="24"
  height="24"
  >
<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M16 6 12 2 8 6" /><path d="M12 2 12 15" />
</svg>
);

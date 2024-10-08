import { getRandomHexColor } from '@/lib/utils';
import './index.css';

export function CardGrainyBackground() {
  return (
    <div
      className='absolute inset-0 border-2 border-dashed border-black'
      style={{ background: getRandomHexColor() }}
    >
      <div className='h-full w-full card' />
    </div>
  );
}

import { LinkButton } from '../buttons/Button';

import ReactIcon from '@/assets/icons/react.png';
import FimgaIcon from '../../assets/icons/figma.png';
import JSIcon from '@/assets/icons/javascript.png';

export const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
      <div className='text-center z-10 flex-column'>
        {/* Title */}
        <div>
          <h3>👋Hi, my name is Meik and I am a Frontend Developer</h3>
          <h1 className=' leading-[1.8] scale-y-[1.8] scale-x-[1.5] tracking-tighter title'>Frontend Developer</h1>
          <h1 className='secondTitle leading-[1.7] scale-y-[1.8] scale-x-[1.5] tracking-tight'>& UI/UX Designer</h1>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingBottom: '2rem',
          }}>
          <p className='text-4x1 md:text-3xl text-gray-500 mb-8'>Based in Germany, Hamburg</p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <img src={ReactIcon} alt='React Icon' width={50} height={50} />
            <img src={FimgaIcon} alt='Figma Icon' width={50} height={50} />
            <img src={JSIcon} alt='JS Icon' width={50} height={50} />
          </div>
        </div>

        {/* Buttons */}
        <div className='flex justify-center space-x-4 mt-8'>
          <LinkButton text='View Projects' link='#projects' type={'primary'} />
          <LinkButton text='Contact Me' link='#contact' />
        </div>
      </div>
    </section>
  );
};

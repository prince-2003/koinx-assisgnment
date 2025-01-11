import card from '../assets/card.svg';
import Button from './button';
import { IoMdArrowRoundForward } from 'react-icons/io';

const GettingStarted = () => {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg gap-4 bg-[#0052fe] p-4 text-white "> 
        <h1 className="font-bold max-w-[268px] text-center text-2xl">Get Started with KoinX for FREE</h1>
        <p className='max-w-[327px] text-center font-medium text-sm leading-6'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
        <img src={card} alt="card" className="w-1/2" />
        <Button text="Getting Started" className="bg-white text-black p-2 rounded-lg mt-4 font-semibold text-lg px-6"><IoMdArrowRoundForward /></Button>
        </div>
    );
    }

export default GettingStarted;
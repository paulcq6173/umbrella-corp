import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useEffect, useRef, useState } from 'react';

const Collapsible = (props: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  // For monitoring collapsible component on mobile devices
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleTouchOutside(event: TouchEvent) {
      const target = event.target as HTMLElement;
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        setOpen(!open);
      }
    }
    // attaches an eventListener to listen when componentDidMount
    document.addEventListener('touchstart', handleTouchOutside);

    return () => {
      // optionally returning a func in useEffect runs like
      // componentWillUnmount to cleanup
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [wrapperRef, open]);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="z-10">
      <button
        className="w-8 border-2 border-transparent rounded-sm text-black cursor-pointer dark:text-white hover:bg-red-500 focus:border-red-600"
        onClick={handleToggle}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={`fixed w-28 h-96 z-1 top-0 right-0 text-sm text-black overflow-x-hidden transition ease-in-out duration-300 bg-gray-400 opacity-95 ${
          open ? 'translate-x-0' : 'translate-x-28'
        }`}
      >
        <button
          className="absolute w-5 h-5 text-md sm:w-8 sm:h-8 sm:text-xl text-white mt-0 top-0 right-0 bg-red-800"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div>{props.children}</div>
      </div>
    </div>
  );
};
export default Collapsible;

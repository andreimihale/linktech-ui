import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const DarkModeSwitcher = ({ enforceTheme, ...props }) => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    if (theme === 'dark' || enforceTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  if (!mounted) return null;

  return (
    <>
      {
        <button onClick={handleThemeChange} {...props}>
          <span className="icon-dark">
            <SunIcon className="w-10 h-10 text-yellow-500" />
          </span>
          <span className="icon-light">
            <MoonIcon className="w-10 h-10 text-gray-900" />
          </span>
        </button>
      }
    </>
  );
};

DarkModeSwitcher.propTypes = {
  enforceTheme: PropTypes.string,
};

export default DarkModeSwitcher;

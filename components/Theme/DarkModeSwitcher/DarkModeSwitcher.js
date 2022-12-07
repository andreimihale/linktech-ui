import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const DarkModeSwitcher = ({ onClick, ...props }) => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    if (theme === 'dark') {
      return (
        <button
          aria-label="sun"
          onClick={() => onClick || setTheme('light')}
          {...props}
        >
          <SunIcon className="w-10 h-10 text-yellow-500 " />
        </button>
      );
    } else {
      return (
        <button
          aria-label="moon"
          onClick={() => onClick || setTheme('dark')}
          {...props}
        >
          <MoonIcon className="w-10 h-10 text-gray-900 " />
        </button>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

DarkModeSwitcher.propTypes = {
  onClick: PropTypes.func,
};

export default DarkModeSwitcher;

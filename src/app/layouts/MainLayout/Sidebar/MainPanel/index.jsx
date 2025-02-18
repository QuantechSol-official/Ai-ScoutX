// Import Dependencies
import PropTypes from "prop-types";
import { Link } from "react-router";
import clsx from "clsx";

// Local Imports
import { Menu } from "./Menu";
import { Profile } from "../../Profile";
import { useThemeContext } from "app/contexts/theme/context";
import logoSmallDark from 'assets/logo-sm-dark.png';
import logoSmallLight from 'assets/logo-sm-light.png';
import { Button } from "components/ui";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
// ----------------------------------------------------------------------

export function MainPanel({ nav, setActiveSegment, activeSegment, close }) {
  const { cardSkin, isDark } = useThemeContext();
  return (
    <div className="main-panel">
      <div
        className={clsx(
          "flex p-4 h-full w-full flex-col items-center border-gray-150 bg-white dark:border-dark-600/80 ltr:border-r rtl:border-l",
          cardSkin === "shadow" ? "dark:bg-dark-750" : "dark:bg-dark-900",
        )}
      >
        {/* Application Logo */}
        <div className="flex pt-3.5">
          <Link to="/">
            {/* <Logo className="size-10 text-primary-600 dark:text-primary-400" /> */}
            <img src={isDark ? logoSmallLight : logoSmallDark} alt='logo-small' height={40} width={100} />
          </Link>
          <div className="relative flex h-16 w-full shrink-0 items-center justify-between pl-4 pr-1 rtl:pl-1 rtl:pr-4">
            <Button
              onClick={close}
              isIcon
              variant="flat"
              className="size-7 rounded-full xl:hidden"
            >
              <ChevronLeftIcon className="size-6 rtl:rotate-180" />
            </Button>
            <img src={isDark ? logoSmallLight : logoSmallDark} alt='logo-small' height={40} width={100} />
          </div>
        </div>
        <Menu
          nav={nav}
          activeSegment={activeSegment}
          setActiveSegment={setActiveSegment}
        />

        {/* Bottom Links */}
        {/* <Item
            id={settings.id}
            component={Link}
            to="/settings/appearance"
            title="Settings"
            isActive={activeSegment === settings.path}
            Icon={settings.Icon}
            childs={nav}
          /> */}
        <div className="flex flex-col items-center space-y-3 py-2.5 mt-4">
          <Profile />
        </div>
      </div>
    </div>
  );
}

MainPanel.propTypes = {
  nav: PropTypes.array,
  setActiveSegment: PropTypes.func,
  close: PropTypes.func,
  activeSegment: PropTypes.string,
};

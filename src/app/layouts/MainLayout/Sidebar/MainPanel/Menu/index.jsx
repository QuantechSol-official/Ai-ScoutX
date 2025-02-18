// Import Dependencies
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

// Local Imports
import { NAV_TYPE_ITEM } from "constants/app.constant";
import { ScrollShadow } from "components/ui";
import { Item } from "./Item";
import { useState } from "react";

// ----------------------------------------------------------------------

export function Menu({ nav, setActiveSegment, activeSegment }) {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(nav[0]?.id);

  const handleSegmentSelect = (path, hasChildren, id) => {
    if (hasChildren) {
      setActiveSegment(path)
      setOpenId((prevOpenId) => (prevOpenId === id ? null : id)); // Toggle submenu
    } else {
      setActiveSegment(path);
    }
  };
  

  const getProps = ({ id, path, type, title, transKey, linkProps, childs = [] }) => {
    const isLink = type === NAV_TYPE_ITEM;
    const hasChildren = childs.length > 0; // Check if the item has sub-items
  
    return {
      id,
      component: isLink ? Link : "button",
      ...(isLink && { to: path, ...linkProps }),
      onClick: !isLink ? () => handleSegmentSelect(path, hasChildren, id) : null,
      isActive: path === activeSegment,
      title: t(transKey) || title,
      path,
      hasChildren,
      childs, // Pass child routes
    };
  };  

  return (
    <ScrollShadow
      data-root-menu
      className="hide-scrollbar flex w-full grow flex-col items-center space-y-4 overflow-y-auto pt-5 lg:space-y-3 xl:pt-5 2xl:space-y-4"
    >
      {nav.map(({ id, Icon, path, type, title, transKey, linkProps, childs }) => {
        return (
          <Item
            key={path}
            {...getProps({ path, type, title, transKey, linkProps, childs })}
            id={id}
            Icon={Icon}
            openId={openId}
            setOpenId={setOpenId}
          />
        );
      })}
    </ScrollShadow>
  );
}

Menu.propTypes = {
  nav: PropTypes.array,
  activeSegment: PropTypes.string,
  setActiveSegment: PropTypes.func,
};

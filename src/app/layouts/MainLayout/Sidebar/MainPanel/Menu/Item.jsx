import PropTypes from "prop-types";
import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChildItem } from "./childItem";

export function Item({
  id,
  title,
  isActive,
  Icon,
  component,
  onClick,
  hasChildren,
  childs = [],
  openId,
  setOpenId,
  ...rest
}) {
  const Element = component || "button";
  const isOpen = openId === id; // Check if the current item is open

  const handleClick = () => {
    if (hasChildren) {
      setOpenId((prevOpenId) => (prevOpenId === id ? null : id)); // Toggle accordion
    } else {
      onClick?.(); // Call onClick only for non-parent items
    }
  };

  return (
    <>
      <Element
        data-root-menu-item
        className={clsx(
          "relative flex items-center rounded-lg outline-none transition-colors duration-200 p-2 w-full",
          isActive
            ? "bg-primary-600/10 text-primary-600 dark:bg-primary-400/15 dark:text-primary-400"
            : "text-gray-500 hover:bg-primary-600/20 focus:bg-primary-600/20 active:bg-primary-600/25 dark:text-dark-200 dark:hover:bg-dark-300/20 dark:focus:bg-dark-300/20 dark:active:bg-dark-300/25"
        )}
        onClick={handleClick}
        {...rest}
      >
        {Icon && <Icon className="size-7 mr-4" />}
        {title && <div>{title}</div>}
        {hasChildren && (
          <ChevronRightIcon
            className={clsx(
              "size-6 rtl:rotate-180 ml-auto transition-transform",
              isOpen && "rotate-90"
            )}
          />
        )}
      </Element>

      {/* Show child routes when open */}
      {isOpen && hasChildren && (
        <div
          className={clsx(
            "ml-6 flex flex-col space-y-2 mt-2 transition-all duration-300 ease-in-out",
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          {childs.map((child) => (
            <ChildItem
              key={child.id}
              child={child}
              openId={openId}
              setOpenId={setOpenId}
              activeSegment={rest.path}
            />
          ))}
        </div>
      )}
    </>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  Icon: PropTypes.elementType,
  component: PropTypes.elementType,
  onClick: PropTypes.func,
  hasChildren: PropTypes.bool,
  childs: PropTypes.array,
  openId: PropTypes.string,
  setOpenId: PropTypes.func,
};

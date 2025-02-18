import { Link, useLocation } from "react-router";
import clsx from "clsx";
import { Item } from "./Item";

export function ChildItem({ child, openId, setOpenId }) {
  const location = useLocation(); // Get current URL path
  const isLeafNode = !child.childs || child.childs.length === 0; // Check if child has no sub-items
  const isActiveChild = location.pathname === child.path; // Check if child path matches the current route

  return (
    <Item
      key={child.id}
      {...child}
      component={isLeafNode ? Link : "button"} // Render as <Link> if it's a leaf node
      to={isLeafNode ? child.path : undefined} // Assign 'to' prop if it's a link
      onClick={isLeafNode ? undefined : () => setOpenId(null)} // Allow navigation for links, close accordion otherwise
      className={clsx(
        "flex items-center p-2 w-full transition-colors duration-200 rounded-lg",
        isActiveChild ? "text-primary-600 dark:text-primary-400" : "text-gray-500 dark:text-dark-200"
      )}
      isActive={isActiveChild} // Only use this for icon & text styling, no bg change
      openId={openId}
      setOpenId={setOpenId}
    />
  );
}

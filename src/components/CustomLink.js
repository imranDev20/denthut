import React from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link
        className={`mx-2 p-2 hover:text-cyan-400 transition-colors font-medium ${
          match ? "text-cyan-400" : "text-neutral-600"
        }`}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </>
  );
};

export default CustomLink;

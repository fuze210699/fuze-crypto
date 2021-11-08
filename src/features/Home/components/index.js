import React from "react";

export default function HomeContent({ children }) {
  return <>{children}</>;
}
HomeContent.Stats = function HomeContentStats({ children, ...restProps }) {
  return <>{children}</>;
};
HomeContent.Heading = function HomeContentHeading({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
};

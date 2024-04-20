import { memo } from "react";

const Icon = memo((props) => {
  const { className = "", name, height = 44, width = 88 } = props;
  return (
    <svg className={`${className}`} height={height} width={width}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
});

export default Icon;

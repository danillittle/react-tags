import React from "react";
import PropTypes from "prop-types";
import Color from "color";
import classNames from "classnames";

const DARKEN_RATIO = 0.15;

function Tag({ label, color, closable, outline, onClose }) {
  const hasColor = !outline && color;
  const className = classNames("react-tags-tag", {
    "react-tags-has-color": hasColor, // if outline is true, color is not used
  });

  const style = {
    ...(outline
      ? {
          color,
          backgroundColor: "transparent",
          borderColor: color,
        }
      : {}),
    ...(hasColor
      ? {
          backgroundColor: color,
          borderColor: Color(color).darken(DARKEN_RATIO).rgb(),
        }
      : {}),
  };

  return (
    <div className={className} style={style}>
      {label}
      {closable && (
        <span
          onClick={() => onClose(label)}
          className="react-tags-close"
          aria-label="Close"
          aria-hidden="true"
        >
          &#x2715;
        </span>
      )}
    </div>
  );
}

Tag.defaultProps = {
  color: null,
  closable: false,
  outline: false,
  onClose: () => {},
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  closable: PropTypes.bool,
  outline: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Tag;

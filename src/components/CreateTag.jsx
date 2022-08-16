import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ColorPicker from "./ColorPicker";

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

function CreateTag({ onSubmit, maxLength, placeholder, color }) {
  const inputRef = useRef(null);
  const [tagLabel, setTagLabel] = useState("");
  const [tagColor, setTagColor] = useState(null);
  const className = classNames("react-tags-create", {
    "react-tags-create-active": tagLabel.length,
  });

  const handleInputChange = (e) => {
    setTagLabel(e.target.value);
  };

  const handleColorChange = useCallback(
    (pickedColor) => {
      setTagColor(pickedColor);
      inputRef.current.focus();
    },
    [setTagColor, inputRef]
  );

  const handleInputKeyDown = useCallback(
    (e) => {
      if (e.keyCode === ENTER_KEY_CODE && tagLabel.length) {
        onSubmit({ label: tagLabel, color: tagColor });
        setTagLabel("");
        setTagColor(null);
      }

      if (e.keyCode === ESC_KEY_CODE) {
        setTagLabel("");
        setTagColor(null);
      }
    },
    [tagLabel, tagColor, onSubmit]
  );

  return (
    <span className={className}>
      <input
        ref={inputRef}
        value={tagLabel}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        size={tagLabel.length ? tagLabel.length : 1}
        maxLength={maxLength}
        placeholder={placeholder}
        className="react-tags-create-input"
      />
      {color && <ColorPicker onChange={handleColorChange} />}
    </span>
  );
}

CreateTag.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  color: PropTypes.bool.isRequired,
};

export default CreateTag;

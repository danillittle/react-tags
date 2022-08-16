import React, { useState } from "react";
import PropTypes from "prop-types";
import Tag from "./components/Tag";
import CreateTag from "./components/CreateTag";
import "./styles.scss";

function ReactTags({
  tags,
  color,
  addable,
  closable,
  outline,
  inputPlaceholder,
  maxLength,
  onClose,
  onChange,
}) {
  const [tagsState, setTagsState] = useState(tags);

  const handleClose = (tagName) => {
    const newTags = tagsState.filter(({ label }) => label !== tagName);
    setTagsState(newTags);
    if (onClose) {
      onClose(newTags);
    }
  };

  const handleCreate = (tag) => {
    const newTags = [...tagsState, tag];
    setTagsState(newTags);
    if (onChange) {
      onChange(newTags);
    }
  };

  return (
    <div className="rc-tags">
      {tagsState.map(({ label, color: clr }) => (
        <Tag
          key={label}
          label={label}
          color={color ? clr : null} // if color is false, don't pass color
          outline={color ? outline : false} // if color is false, don't pass outline
          closable={closable}
          onClose={handleClose}
        />
      ))}
      {addable && (
        <CreateTag
          onSubmit={handleCreate}
          maxLength={maxLength}
          placeholder={inputPlaceholder}
          color={color}
        />
      )}
    </div>
  );
}

ReactTags.defaultProps = {
  color: false,
  addable: false,
  closable: false,
  outline: false,
  inputPlaceholder: "+ New Tag",
  maxLength: 15,
  onClose: () => {},
  onChange: () => {},
};

ReactTags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
  color: PropTypes.bool,
  addable: PropTypes.bool,
  closable: PropTypes.bool,
  outline: PropTypes.bool,
  inputPlaceholder: PropTypes.string,
  maxLength: PropTypes.number,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
};

export default ReactTags;

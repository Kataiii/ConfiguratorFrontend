import React, { useState, useEffect, useRef } from "react";
import type { MouseEventHandler } from "react";

import ArrowDown from "../../assets/icons/icon-dropdown select.svg";
import Styles from "./css/Select.module.css";

type Option = {
  name: string;
  id: number;
};
type OptionProps = {
  option: Option;
  onClick: (value: Option["id"]) => void;
};
const OptionEl = (props: OptionProps) => {
  const {
    option: { id, name },
    onClick
  } = props;
  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick = (
    clickedValue: Option["id"]
  ): MouseEventHandler<HTMLLIElement> => () => {
    onClick(clickedValue);
  };

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === "Enter") {
        onClick(id);
      }
    };

    option.addEventListener("keydown", handleEnterKeyDown);
    return () => {
      option.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, [id, onClick]);

  return (
    <li
      className={Styles.option}
      value={id}
      onClick={handleClick(id)}
      tabIndex={0}
      data-testid={`select-option-${id}`}
      ref={optionRef}
    >
      {name}
    </li>
  );
};

type SelectProps = {
  selected: Option | null;
  options: Option[];
  placeholder?: string;
  mode?: "rows" | "cells";
  status?: "default" | "invalid";
  onChange?: (selected: Option["id"]) => void;
  onClose?: () => void;
};

const Select = (props: SelectProps) => {
  const {
    mode = "rows",
    options,
    placeholder,
    status = "default",
    selected,
    onChange,
    onClose
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [onClose]);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setIsOpen((prev) => !prev);
      }
    };
    placeholderEl.addEventListener("keydown", handleEnterKeyDown);

    return () => {
      placeholderEl.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, []);

  const handleOptionClick = (value: Option["id"]) => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={Styles.selectWrapper}
      ref={rootRef}
      data-is-active={isOpen}
      data-mode={mode}
      data-testid="selectWrapper"
    >
      <div className={Styles.arrow}>
        <img src={ArrowDown} alt='arrowdown'/>
      </div>
      <div
        className={Styles.placeholder}
        data-status={status}
        data-selected={!!selected?.id}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
        ref={placeholderRef}
      >
        {selected?.name || placeholder}
      </div>
      {isOpen && (
        <ul className={Styles.select} data-testid="selectDropdown">
          {options.map((option) => (
            <OptionEl
              key={option.id}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;

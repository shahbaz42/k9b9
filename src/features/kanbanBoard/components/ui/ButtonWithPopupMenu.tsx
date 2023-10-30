import React, { useState } from "react";
import { SettingsIcon, ChevronDownIcon } from "../../assets/icons";
import { SmallMenuBox } from ".";
import { SelectWithLabel } from ".";
import { ButtonWithPopupMenuProps, groupBy, sortBy } from "../../types";

export const ButtonWithPopupMenu = React.forwardRef<
  HTMLButtonElement,
  ButtonWithPopupMenuProps
>(({ config, className, ...props }, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        ref={ref}
        {...props}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="button-with-popup-menu"
      >
        <div className="icon">
          <SettingsIcon />
        </div>
        <div className="text-semibold">Display</div>
        <div className="icon">
          <ChevronDownIcon />
        </div>
      </button>
      {isMenuOpen && (
        <>
          <SmallMenuBox className="absolute">
            <SelectWithLabel
              label="Group by"
              options={["user", "status", "priority"]}
              value={config.groupBy}
              setValue={(value) => {
                props.setConfig((prev) => ({
                  ...prev,
                  groupBy: value as groupBy,
                }));
              }}
            />
            <SelectWithLabel
              className="mt-2"
              label="Sort by"
              options={["select", "priority", "title"]}
              value={config.sortBy}
              setValue={(value) => {
                props.setConfig((prev) => ({
                  ...prev,
                  sortBy: value as sortBy,
                }));
              }}
            />
          </SmallMenuBox>
          <div className="absolute" onClick={()=>{setIsMenuOpen(false)}} style={{height: "100vh", width:"100vw"}}>

          </div>
        </>
      )}
    </>
  );
});

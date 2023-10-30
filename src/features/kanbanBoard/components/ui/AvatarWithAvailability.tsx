import React from "react";
import { AvatarWithAvailabilityProps } from "../../types";
import { getColorForCharacter } from "../../utils";

export const AvatarWithAvailability = React.forwardRef<
  HTMLDivElement,
  AvatarWithAvailabilityProps
>(({ avatarText, isAvailable, avatarUrl }, ref) => {
  return (
    <div
      ref={ref}
      className="avatar-icon relative"
      style={{ backgroundColor: getColorForCharacter(avatarText.charAt(0)) }}
    >
      <div className="avatar-text absolute">{avatarText}</div>
      <div
        className={`user-status-icon absolute ${
          isAvailable ? "avatar-status-available" : "avatar-status-away"
        } `}
      >
      </div>
    </div>
  );
});

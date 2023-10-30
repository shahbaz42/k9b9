import React from 'react';
import { AvatarWithAvailabilityProps } from '../../types';

export const AvatarWithAvailability = React.forwardRef<HTMLDivElement, AvatarWithAvailabilityProps>(
    ({ avatarText, isAvailable, avatarUrl }, ref) => {
        return (
            <div ref={ref} className="avatar-icon">
              <div className="relative">
                <div className="icon">{avatarText}</div>
                <div className="user-status-icon absolute">x</div>
              </div>
            </div>
        );
    }
);
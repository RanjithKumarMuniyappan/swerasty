import React from 'react';

export const Icon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <svg
        className={`w-6 h-6 ${className}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        {children}
    </svg>
);

export const DashboardIcon: React.FC = () => (
    <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </Icon>
);

export const SyllabusIcon: React.FC = () => (
    <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-5.247-8.494l10.494 0M12 6.253L17.247 9M12 6.253L6.753 9M12 17.747L6.753 15M12 17.747L17.247 15M4.5 12l7.5 4l7.5-4M4.5 12l7.5-4l7.5 4" />
    </Icon>
);

export const BookIcon: React.FC<{className?: string}> = ({className}) => (
    <Icon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </Icon>
);

export const PeopleIcon: React.FC = () => (
    <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </Icon>
);

export const VolunteerIcon: React.FC = () => (
     <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </Icon>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <Icon className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </Icon>
);

export const CloseIcon: React.FC = () => (
    <Icon className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </Icon>
);

export const MenuIcon: React.FC = () => (
    <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </Icon>
);

export const RefreshIcon: React.FC = () => (
    <Icon className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4m.5 4a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
    </Icon>
);

export const LinkIcon: React.FC<{className?: string}> = ({className}) => (
    <Icon className={`w-4 h-4 ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </Icon>
);
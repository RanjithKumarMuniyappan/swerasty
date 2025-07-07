
import React from 'react';
import { MenuId, MenuItem } from './types';
import { BookIcon, DashboardIcon, PeopleIcon, SyllabusIcon, VolunteerIcon } from './src/app/components/Icons';

export const MENU_ITEMS: MenuItem[] = [
    {
        id: MenuId.DASHBOARD,
        label: 'முகப்பு',
        icon: DashboardIcon,
        path: '/pages/dashboard/',
    },
    {
        id: MenuId.SYLLABUS,
        label: 'பாடத்திட்டம்',
        icon: SyllabusIcon,
        path: '/pages/syllabus',
    },
    {
        id: MenuId.ILAKKIYAM,
        label: 'இலக்கணம்',
        icon: BookIcon,
        path: '/pages/ilakkanam',
    },
    {
        id: MenuId.ARIGNARKAL,
        label: 'தமிழ் அறிஞர்கள்',
        icon: PeopleIcon,
        path: '/pages/arignarkal',
    },
    {
        id: MenuId.THONDU,
        label: 'தமிழ்த்தொண்டு',
        icon: VolunteerIcon,
        path: '/pages/tamilthondu',
    },
];

import type { ReactNode, FC } from 'react';

export enum MenuId {
    DASHBOARD = 'dashboard',
    SYLLABUS = 'syllabus',
    ILAKKIYAM = 'ilakkiyam',
    ARIGNARKAL = 'arignarkal',
    THONDU = 'thondu',
}

export interface MenuItem {
    id: MenuId;
    label: string;
    icon: FC;
    path: string;
}

export interface GroundingChunk {
    web: {
        uri: string;
        title: string;
    };
}

export interface Scholar {
    id: string;
    name: string;
    description: string;
    works: string[];
    imageUrl: string;
}

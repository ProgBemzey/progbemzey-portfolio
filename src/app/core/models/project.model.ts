export interface Project {
    id: string;
    titleKey: string;
    descKey: string;
    category: 'enterprise' | 'freelance' | 'personal';
    tags: string[];
    icon: string;
    meta: ProjectMeta[];
    links: ProjectLink[];
    confidential?: boolean;
    accentColor?: string;
}

export interface ProjectMeta {
    icon: string;
    labelKey: string;
}

export interface ProjectLink {
    icon: string;
    labelKey: string;
    url?: string;
    disabled?: boolean;
}
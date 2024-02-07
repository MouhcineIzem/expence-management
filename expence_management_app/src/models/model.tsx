export interface User {
    name?: string;
}

export interface Project {
    id?: number;
    name?: string;
    users?: User[];
}

export interface FileNode {
    name: string;
    children?: FileNode[];
}

export class ActStructure {
    name!: string;
    children?: FileNode[];
}
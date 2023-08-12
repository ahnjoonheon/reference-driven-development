interface TreeNode {
    name: string;
    children?: TreeNode[];
    link: string;
    status: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    size: 'small' | 'medium' | 'large'
    thumbnailUrl?: string;
    author?: string;
    date?: string;
}

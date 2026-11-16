export interface Project {
    title: string;
    description: string;
    href: string;
    tags: string[];
}

// Portfolio projects. Add or remove entries here; no backend needed.
export const projects: Project[] = [
    {
        title: 'Hot-grabba',
        description:
            'Métodos de revisión de anti-cheat (screenshare) puestos a prueba en una VM de Windows real. Cada reporte explica el contexto, el bypass ejecutado con outputs reales y el fix que el staff debería usar en su lugar.',
        href: 'https://github.com/4sapp/Hot-grabba',
        tags: ['PowerShell', 'C#', 'Seguridad'],
    },
];

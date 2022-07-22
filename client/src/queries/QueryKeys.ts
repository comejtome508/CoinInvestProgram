export const boardKeys = {
    all: ['board'] as const,
    list: () => [...boardKeys.all, 'list'] as const,
    listItem: () => [...boardKeys.all, 'listItem'] as const,
    create: () => [...boardKeys.all, 'create'] as const,
    update: () => [...boardKeys.all,'update'] as const,
    delete: () => [...boardKeys.all, 'delete'] as const,
}
export const boardKeys = {
    all: ['board'] as const,
    list: () => [...boardKeys.all, 'list'] as const,
    listItemDetail: () => [...boardKeys.all, 'listItemDetail'] as const,
    createBoardItem: () => [...boardKeys.all, 'createBoardItem'] as const,
    updateBoardItem: () => [...boardKeys.all,'updateBoardItem'] as const,
    deleteBoardItem: () => [...boardKeys.all, 'deleteBoardItem'] as const,
}
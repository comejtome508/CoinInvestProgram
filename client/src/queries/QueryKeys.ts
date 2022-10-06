export const boardKeys = {
    all: ['board'] as const,
    list: () => [...boardKeys.all, 'list'] as const,
    listItemDetail: () => [...boardKeys.all, 'listItemDetail'] as const,
    createBoardItem: () => [...boardKeys.all, 'createBoardItem'] as const,
    updateBoardItem: () => [...boardKeys.all,'updateBoardItem'] as const,
    deleteBoardItem: () => [...boardKeys.all, 'deleteBoardItem'] as const,
}

export const upbitKeys = {
    all: ['upbit'] as const,
    allAccounts: () => [...upbitKeys.all, 'allAccounts'] as const,
    allMarketInfo: () => [...upbitKeys.all, 'allMarketInfo'] as const,
    orderLists: () => [...upbitKeys.all, 'orderLists'] as const,
}
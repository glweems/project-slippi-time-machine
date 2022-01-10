export declare type SortOption = 'year' | 'month' | 'day' | 'player' | 'stage' | 'win-loss';
export declare type ConnectCodeType = '{string}#{number}';
export declare type SortSlippiDirOpts = {
    slippiDir: string;
    sortBy?: SortOption | SortOption[];
    recursive?: boolean;
    filterShortGames?: boolean;
    deleteShortGames?: boolean;
    hrFormat?: '24' | '12';
    connectCode?: ConnectCodeType;
};
export declare const sortSlippiDir: (opts: SortSlippiDirOpts) => void;

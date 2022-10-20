export declare const ContractWrappersConfigSchema: {
    id: string;
    properties: {
        chainId: {
            type: string;
        };
        gasPrice: {
            $ref: string;
        };
        contractAddresses: {
            type: string;
            properties: {
                zrxToken: {
                    $ref: string;
                };
                etherToken: {
                    $ref: string;
                };
                staking: {
                    $ref: string;
                };
            };
        };
        blockPollingIntervalMs: {
            type: string;
        };
    };
    type: string;
    required: string[];
};
//# sourceMappingURL=contract_wrappers_config_schema.d.ts.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractWrappersConfigSchema = void 0;
exports.ContractWrappersConfigSchema = {
    id: '/ContractWrappersConfig',
    properties: {
        chainId: {
            type: 'number',
        },
        gasPrice: { $ref: '/numberSchema' },
        contractAddresses: {
            type: 'object',
            properties: {
                zrxToken: { $ref: '/addressSchema' },
                etherToken: { $ref: '/addressSchema' },
                staking: { $ref: '/addressSchema' },
            },
        },
        blockPollingIntervalMs: { type: 'number' },
    },
    type: 'object',
    required: ['chainId'],
};
//# sourceMappingURL=contract_wrappers_config_schema.js.map
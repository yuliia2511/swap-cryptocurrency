import { ContractAddresses } from '@0x/contract-addresses';
import { AbiDecoder } from '@0x/utils';
import { SupportedProvider } from 'ethereum-types';
import { IZeroExContract } from './generated-wrappers/i_zero_ex';
import { StakingContract } from './generated-wrappers/staking';
import { WETH9Contract } from './generated-wrappers/weth9';
import { ContractWrappersConfig } from './types';
/**
 * The ContractWrappers class contains smart contract wrappers helpful when building on 0x protocol.
 */
export declare class ContractWrappers {
    /**
     * An index of the default contract addresses for this chain.
     */
    contractAddresses: ContractAddresses;
    /**
     * An instance of the WETH9Contract class containing methods for interacting with the
     * WETH9 smart contract.
     */
    weth9: WETH9Contract;
    /**
     * An instance of the StakingContract class containing methods for interacting with the Staking contracts.
     */
    staking: StakingContract;
    /**
     * An instance of the IZeroExContract class containing methods for interacting with the Exchange Proxy.
     */
    exchangeProxy: IZeroExContract;
    private readonly _web3Wrapper;
    /**
     * Instantiates a new ContractWrappers instance.
     * @param   supportedProvider    The Provider instance you would like the contract-wrappers library to use for interacting with
     *                      the Ethereum network.
     * @param   config      The configuration object. Look up the type for the description.
     * @return  An instance of the ContractWrappers class.
     */
    constructor(supportedProvider: SupportedProvider, config: ContractWrappersConfig);
    /**
     * Unsubscribes from all subscriptions for all contracts.
     */
    unsubscribeAll(): void;
    /**
     * Get the provider instance currently used by contract-wrappers
     * @return  Web3 provider instance
     */
    getProvider(): SupportedProvider;
    /**
     * Get the abi decoder instance currently used by contract-wrappers
     * @return  AbiDecoder instance
     */
    getAbiDecoder(): AbiDecoder;
}
//# sourceMappingURL=contract_wrappers.d.ts.map
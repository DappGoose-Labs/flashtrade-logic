import { ethers } from 'ethers';

export class MockProvider implements ethers.providers.Provider {
  _isProvider = true;
  network = { chainId: 1, name: 'mainnet' };
  
  async getNetwork() {
    return this.network;
  }
  
  async getBlockNumber() {
    return 123456;
  }
  
  async getGasPrice() {
    return ethers.BigNumber.from('50000000000');
  }
  
  async getBalance(address: string) {
    return ethers.utils.parseEther('10.0');
  }
  
  async getFeeData(): Promise<ethers.providers.FeeData> {
    return {
      maxFeePerGas: ethers.BigNumber.from('100000000000'),
      maxPriorityFeePerGas: ethers.BigNumber.from('1000000000'),
      gasPrice: ethers.BigNumber.from('50000000000'),
      lastBaseFeePerGas: ethers.BigNumber.from('50000000000'),
    };
  }
  
  async getTransactionCount(addressOrName: string, blockTag?: ethers.providers.BlockTag): Promise<number> {
    return 10;
  }
  
  async getCode(addressOrName: string, blockTag?: ethers.providers.BlockTag): Promise<string> {
    return '0x';
  }
  
  async getStorageAt(addressOrName: string, position: ethers.BigNumberish, blockTag?: ethers.providers.BlockTag): Promise<string> {
    return '0x';
  }
  
  async sendTransaction(signedTransaction: string): Promise<ethers.providers.TransactionResponse> {
    return {
      hash: '0xmocktxhash',
      confirmations: 1,
      from: '0xmocksender',
      wait: async (confirmations?: number) => {
        return {
          to: '0xmockreceiver',
          from: '0xmocksender',
          contractAddress: null,
          transactionIndex: 0,
          gasUsed: ethers.BigNumber.from(21000),
          logsBloom: '0x',
          blockHash: '0xmockblockhash',
          transactionHash: '0xmocktxhash',
          logs: [],
          blockNumber: 123456,
          confirmations: confirmations || 1,
          cumulativeGasUsed: ethers.BigNumber.from(21000),
          effectiveGasPrice: ethers.BigNumber.from(50000000000),
          byzantium: true,
          type: 0,
          status: 1
        };
      },
      nonce: 0,
      gasLimit: ethers.BigNumber.from(21000),
      gasPrice: ethers.BigNumber.from(50000000000),
      data: '0x',
      value: ethers.BigNumber.from(0),
      chainId: 1,
      blockHash: null,
      blockNumber: null,
      timestamp: 0,
      raw: '0x',
      r: '0x',
      s: '0x',
      v: 27,
      accessList: null,
      type: 0,
      to: '0xmockreceiver'
    };
  }
  
  on(eventName: ethers.providers.EventType, listener: ethers.providers.Listener): ethers.providers.Provider {
    return this;
  }
  
  once(eventName: ethers.providers.EventType, listener: ethers.providers.Listener): ethers.providers.Provider {
    return this;
  }
  
  emit(eventName: ethers.providers.EventType, ...args: any[]): boolean {
    return true;
  }
  
  listenerCount(eventName?: ethers.providers.EventType): number {
    return 0;
  }
  
  listeners(eventName?: ethers.providers.EventType): ethers.providers.Listener[] {
    return [];
  }
  
  off(eventName: ethers.providers.EventType, listener?: ethers.providers.Listener): ethers.providers.Provider {
    return this;
  }
  
  removeAllListeners(eventName?: ethers.providers.EventType): ethers.providers.Provider {
    return this;
  }
  
  addListener(eventName: ethers.providers.EventType, listener: ethers.providers.Listener): ethers.providers.Provider {
    return this.on(eventName, listener);
  }
  
  removeListener(eventName: ethers.providers.EventType, listener: ethers.providers.Listener): ethers.providers.Provider {
    return this.off(eventName, listener);
  }
  
  async getTransaction(transactionHash: string): Promise<ethers.providers.TransactionResponse> {
    return {
      hash: transactionHash,
      confirmations: 1,
      from: '0xmocksender',
      wait: async () => ({ confirmations: 1 } as any),
      nonce: 0,
      gasLimit: ethers.BigNumber.from(21000),
      gasPrice: ethers.BigNumber.from(50000000000),
      data: '0x',
      value: ethers.BigNumber.from(0),
      chainId: 1,
      blockHash: '0xmockblockhash',
      blockNumber: 123456,
      timestamp: Date.now(),
      raw: '0x',
      r: '0x',
      s: '0x',
      v: 27,
      accessList: null,
      type: 0,
      to: '0xmockreceiver'
    };
  }
  
  async getTransactionReceipt(transactionHash: string): Promise<ethers.providers.TransactionReceipt> {
    return {
      to: '0xmockreceiver',
      from: '0xmocksender',
      contractAddress: null,
      transactionIndex: 0,
      gasUsed: ethers.BigNumber.from(21000),
      logsBloom: '0x',
      blockHash: '0xmockblockhash',
      transactionHash,
      logs: [],
      blockNumber: 123456,
      confirmations: 1,
      cumulativeGasUsed: ethers.BigNumber.from(21000),
      effectiveGasPrice: ethers.BigNumber.from(50000000000),
      byzantium: true,
      type: 0,
      status: 1
    };
  }
  
  async call(transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest>, blockTag?: ethers.providers.BlockTag): Promise<string> {
    return '0x0';
  }
  
  async estimateGas(transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest>): Promise<ethers.BigNumber> {
    return ethers.BigNumber.from(21000);
  }
  
  async getBlock(blockHashOrBlockTag: ethers.providers.BlockTag | string): Promise<ethers.providers.Block> {
    return {
      hash: '0xmockblockhash',
      parentHash: '0xmockparenthash',
      number: 123456,
      timestamp: Date.now(),
      nonce: '0x0',
      difficulty: 0,
      _difficulty: ethers.BigNumber.from(0),
      gasLimit: ethers.BigNumber.from(8000000),
      gasUsed: ethers.BigNumber.from(21000),
      miner: '0xmockminer',
      extraData: '0x',
      transactions: [],
      baseFeePerGas: null
    };
  }
  
  async getBlockWithTransactions(blockHashOrBlockTag: ethers.providers.BlockTag | string): Promise<any> {
    return {
      hash: '0xmockblockhash',
      parentHash: '0xmockparenthash',
      number: 123456,
      timestamp: Date.now(),
      nonce: '0x0',
      difficulty: 0,
      _difficulty: ethers.BigNumber.from(0),
      gasLimit: ethers.BigNumber.from(8000000),
      gasUsed: ethers.BigNumber.from(21000),
      miner: '0xmockminer',
      extraData: '0x',
      transactions: [],
      baseFeePerGas: null
    };
  }
  
  async getLogs(filter: ethers.providers.Filter): Promise<ethers.providers.Log[]> {
    return [];
  }
  
  async resolveName(name: string): Promise<string> {
    return '0x0000000000000000000000000000000000000000';
  }
  
  async lookupAddress(address: string): Promise<string | null> {
    return null;
  }
  
  async waitForTransaction(transactionHash: string, confirmations?: number, timeout?: number): Promise<ethers.providers.TransactionReceipt> {
    return {
      to: '0xmockreceiver',
      from: '0xmocksender',
      contractAddress: null,
      transactionIndex: 0,
      gasUsed: ethers.BigNumber.from(21000),
      logsBloom: '0x',
      blockHash: '0xmockblockhash',
      transactionHash,
      logs: [],
      blockNumber: 123456,
      confirmations: confirmations || 1,
      cumulativeGasUsed: ethers.BigNumber.from(21000),
      effectiveGasPrice: ethers.BigNumber.from(50000000000),
      byzantium: true,
      type: 0,
      status: 1
    };
  }
}

export class MockSigner extends ethers.Signer {
  private _mockProvider: MockProvider;
  private _address = '0x1234567890123456789012345678901234567890';
  
  constructor() {
    const provider = new MockProvider();
    super();
    this._mockProvider = provider;
    Object.defineProperty(this, 'provider', {
      get: () => this._mockProvider
    });
  }
  
  connect(provider: ethers.providers.Provider): ethers.Signer {
    const newSigner = new MockSigner();
    Object.defineProperty(newSigner, 'provider', {
      get: () => provider
    });
    return newSigner;
  }
  
  async getAddress(): Promise<string> {
    return this._address;
  }
  
  async signMessage(message: string | ethers.utils.Bytes): Promise<string> {
    return '0xsignedmessage';
  }
  
  async signTransaction(transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest>): Promise<string> {
    return '0xsignedtransaction';
  }
  
  async sendTransaction(transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest>): Promise<ethers.providers.TransactionResponse> {
    return this.provider.sendTransaction('0xsignedtransaction');
  }
}

export const mockBlockchainService = {
  getCurrentProvider: jest.fn().mockReturnValue(new MockProvider()),
  getProvider: jest.fn().mockReturnValue(new MockProvider()),
  getSigner: jest.fn().mockReturnValue(new MockSigner()),
  isWalletConnected: jest.fn().mockReturnValue(true),
  setWalletType: jest.fn(),
  getBalance: jest.fn().mockResolvedValue('10.0'),
  getTokenBalance: jest.fn().mockResolvedValue('100.0'),
  getTokenAllowance: jest.fn().mockResolvedValue('50.0'),
  getNetworkConfig: jest.fn().mockReturnValue({
    id: 1,
    name: 'Ethereum Mainnet',
    rpcUrl: 'https://mainnet.infura.io/v3/your-infura-id',
    nativeCurrency: { symbol: 'ETH', name: 'Ether', decimals: 18 },
  }),
};

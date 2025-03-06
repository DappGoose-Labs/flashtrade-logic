/**
 * Environment-specific configuration
 * This file manages different configurations for development, staging, and production
 */

type Environment = 'development' | 'staging' | 'production';

// Get current environment
export const getCurrentEnvironment = (): Environment => {
  // For Vite, check the environment variable
  const envMode = import.meta.env.VITE_NODE_ENV || import.meta.env.MODE;
  
  if (envMode === 'production') {
    // Check domain to distinguish between staging and production
    const hostname = window.location.hostname;
    if (hostname.includes('staging') || hostname.includes('test')) {
      return 'staging';
    }
    return 'production';
  }
  
  return 'development';
};

// Network configuration based on environment
export const getNetworkConfig = () => {
  const env = getCurrentEnvironment();
  
  switch (env) {
    case 'production':
      return {
        defaultNetwork: 'ethereum',
        useTestnets: false,
        rpcOverrides: {},
        enableAnalytics: true,
        cdnBaseUrl: 'https://cdn.yourdomain.com', // Production CDN
      };
    case 'staging':
      return {
        defaultNetwork: 'polygon',
        useTestnets: false,
        rpcOverrides: {},
        enableAnalytics: true,
        cdnBaseUrl: 'https://staging-cdn.yourdomain.com', // Staging CDN
      };
    case 'development':
    default:
      return {
        defaultNetwork: import.meta.env.VITE_DEFAULT_NETWORK || 'optimism',
        useTestnets: import.meta.env.VITE_USE_TESTNETS === 'true',
        rpcOverrides: {},
        enableAnalytics: false,
        cdnBaseUrl: import.meta.env.VITE_CDN_BASE_URL || '', // Local assets
      };
  }
};

// Feature flags based on environment
export const getFeatureFlags = () => {
  const env = getCurrentEnvironment();
  
  const commonFlags = {
    enableArbitrageExecution: import.meta.env.VITE_ENABLE_ARBITRAGE_EXECUTION === 'true',
    enablePriceMonitoring: import.meta.env.VITE_ENABLE_PRICE_MONITORING === 'true',
    enableWalletConnect: import.meta.env.VITE_ENABLE_WALLET_CONNECT === 'true'
  };
  
  switch (env) {
    case 'production':
      return {
        ...commonFlags,
        enableExperimentalFeatures: false,
        enableDebugMode: false
      };
    case 'staging':
      return {
        ...commonFlags,
        enableExperimentalFeatures: true,
        enableDebugMode: true
      };
    case 'development':
    default:
      return {
        ...commonFlags,
        enableExperimentalFeatures: true,
        enableDebugMode: true
      };
  }
};

// Get environment variables
export const getEnvVars = () => {
  const env = getCurrentEnvironment();
  
  // Common variables across environments
  const commonVars = {
    appName: import.meta.env.VITE_APP_NAME || 'FlashTrade Logic',
    apiVersion: import.meta.env.VITE_API_VERSION || 'v1'
  };
  
  switch (env) {
    case 'production':
      return {
        ...commonVars,
        apiBaseUrl: 'https://api.yourdomain.com',
        wsEndpoint: 'wss://ws.yourdomain.com'
      };
    case 'staging':
      return {
        ...commonVars,
        apiBaseUrl: 'https://api.staging.yourdomain.com',
        wsEndpoint: 'wss://ws.staging.yourdomain.com'
      };
    case 'development':
    default:
      return {
        ...commonVars,
        apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
        wsEndpoint: import.meta.env.VITE_WS_ENDPOINT || 'ws://localhost:8001'
      };
  }
};
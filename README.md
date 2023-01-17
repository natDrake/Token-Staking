# Token Staking Project using Hardhat

Deploys a staking token contract with various functionalities like add,remove,check,calculate,distribute,pause/unpause stake.

Try running some of the following tasks:

Start a local blockchain instance on localhost: npm run node

Build smart contract: npm run build

Test smart contract: npm run test

For test coverage: npm run coverage

For deploying to localhost: npm run node, npm run deploy:localhost

For deploying contract on testnets, create a .env file with following:
MUMBAI_RPC_URL_1=""
MUMBAI_RPC_URL=""
BSC_TESTNET_RPC_URL=""
AVALANCHE_TESTNET_RPC_URL="
DEPLOYER_PRIVATE_KEY=
USER_PRIVATE_KEY=
ADMIN_ACCOUNT=""
USER_ACCOUNT=""
POLYGONSCAN_API_KEY=""

For deploying to polygon testnet(mumbai): npm run deploy:polygon

For deploying to bsc testnet: npm run deploy:bsc

For deploying to avalanche testnet: npm run deploy:avax

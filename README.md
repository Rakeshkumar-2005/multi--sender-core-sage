
# 💸 **MultiSender** Smart Contract

A simple contract for bulk sending ETH and ERC20 tokens to multiple recipients in one transaction. This contract allows users to distribute funds efficiently without having to send multiple transactions, saving time and gas fees. Built using Solidity, deployable on Core Blockchain networks.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-remote-repository.git
cd MultiSender-core-sage
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
PRIVATEKEY="YOUR_PRIVATE_KEY"
CORE_TEST2_SCAN_KEY="YOUR_CORE_TEST2_SCAN_KEY"
CORE_TEST1_SCAN_KEY="YOUR_CORE_TEST1_SCAN_KEY"
CORE_MAIN_SCAN_KEY="YOUR_CORE_MAIN_SCAN_KEY"
```

> ⚠️ **Important:** Never share your private key or commit the `.env` file to version control.

---

## 🛠 Hardhat Commands

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

### Deploy Contract

Use a deployment script:

```bash
npx hardhat run scripts/deploy.js --network core_testnet2
```

---

## 🔍 Contract Verification

You can verify contracts using Core block explorers:

```bash
npx hardhat verify --network core_testnet2 <deployed_contract_address> <constructor_args_if_any>
```

API keys for verification must be included in `.env` as shown above.

---

### Contract Highlights

- **Bulk ETH Sending:** Send ETH to multiple addresses in a single transaction by providing an array of recipients and corresponding amounts.
- **Bulk ERC20 Token Sending:** Transfer ERC20 tokens to multiple recipients in one go.
- **Input Validation:** The contract ensures that the number of recipients matches the number of amounts specified.
- **Efficient Transfers:** Helps save gas fees and transaction time when performing multiple transfers.
  

# 🗳️ Voting System Smart Contract

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/your-username/voting-system-smart-contract)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/your-username/voting-system-smart-contract/actions)

A simple smart contract for a voting system, allowing an owner to define candidates, voters to cast their vote, and the owner to end the voting process.

## Features

*   🔧 **Core Features**:
    *   ✅ Allows an owner to initialize the voting system with a list of candidates.
    *   🗳️ Enables voters to cast their vote for a specific candidate.
    *   🛑 Prevents voters from voting multiple times.
    *   🔒 Restricts the `endVoting` function to the owner only.
    *   📊 Provides a function to retrieve the current vote count for each candidate.
*   🌐 **Smart Contract**:
    *   📜 Written in Solidity.
    *   🚀 Deployed using Hardhat.
*   🛡️ **Security**:
    *   🔑 Owner-controlled functionalities.
    *   🚫 Prevents double voting.

## Tech Stack

| Category    | Technologies                                      |
|-------------|---------------------------------------------------|
| Blockchain  | Solidity [Solidity Docs][solidity-docs]             |
| Development | Hardhat [Hardhat Docs][hardhat-docs]            |
| Testing     | Ethers.js [Ethers.js Docs][ethers-docs]          |
| Tooling     | ts-node [ts-node Docs][ts-node-docs], Typescript [Typescript Docs][typescript-docs], typechain [typechain Docs][typechain-docs] |

## Quick Start

### Prerequisites

*   Node.js: v18 or higher
*   npm: v6 or higher (usually comes with Node.js)

### Installation

bash
git clone [repo-url]
cd block
npm install
# or
yarn install


### Environment

This project does not require any environment variables.

## Development

### Commands

bash
npx hardhat compile # Compile the smart contract
npx hardhat test    # Run tests
npx hardhat run scripts/deploy.js --network localhost # Deploy contract to local network


### Testing

The project uses Hardhat for testing.  Tests are written using Mocha and Chai and leverage Ethers.js for interacting with the smart contract.  Run `npx hardhat test` to execute the tests.  This includes unit tests to ensure the contract functions as expected, with checks for access control, voting logic, and result retrieval. Solidity coverage is configured to provide detailed coverage reports.

## API Reference

This section details the VotingSystem smart contract's API.

| Method | Function Name    | Parameters               | Returns                                         | Description                                                        |
|--------|-------------------|--------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| `public` | `constructor`    | `string[] memory candidateNames`   | None                                          | Initializes the voting system with the given candidate names.        |
| `public` | `vote`             | `uint candidateIndex`      | None                                          | Allows a voter to cast their vote for the specified candidate.    |
| `public` | `endVoting`        | None                     | None                                          | Ends the voting process (only callable by the owner).             |
| `public view` | `getCandidates`  | None                     | `Candidate[] memory`                            | Returns a list of all candidates and their vote counts.          |
| `public view` | `hasVoted`  | `address`                     | `bool`                            | Returns if the address has voted           |

## Deployment

1.  **Compile the Contract:**

    bash
    npx hardhat compile
    

2.  **Deploy using Hardhat Scripts (example):**

    Modify `block/scripts/deploy.js` to suit your needs, and run:

    bash
    npx hardhat run scripts/deploy.js --network <network-name>
    
    Replace `<network-name>` with the desired network (e.g., `localhost`, `sepolia`).  Make sure your `hardhat.config.js` is configured for the target network.

## Contributing

We welcome contributions to improve this project! Please follow these guidelines:

*   **Branch Naming:**
    *   `feat/your-feature` for new features.
    *   `bugfix/your-bugfix` for bug fixes.
    *   `chore/your-chore` for general maintenance or updates.

*   **Commit Messages:**
    *   Use imperative mood (e.g., "Add feature", not "Added feature").
    *   Keep messages concise and descriptive.

*   **PR Template:**
    *   Provide a clear description of the changes.
    *   Reference any related issues.
    *   Ensure all tests pass before submitting.

[solidity-docs]: https://docs.soliditylang.org/
[hardhat-docs]: https://hardhat.org/
[ethers-docs]: https://docs.ethers.io/v6/
[ts-node-docs]: https://www.npmjs.com/package/ts-node
[typescript-docs]: https://www.typescriptlang.org/docs/
[typechain-docs]: https://www.npmjs.com/package/typechain

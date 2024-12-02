# Random User Agents

[![npm version](https://badge.fury.io/js/@rahulxf%2Frandom-user-agent.svg)](https://badge.fury.io/js/@rahulxf%2Frandom-user-agent)

[![Github](https://github.com/manzil-infinity180/random-user-agent/actions/workflows/ci.yml/badge.svg?event=push)](https://github.com/manzil-infinity180/random-user-agent/actions/workflows/ci.yml)

### Description

A simple yet powerful NPM package to generate random user agents effortlessly. Whether you're working on web scraping, testing, or automation, this tool provides flexibility to create one or many user agents in seconds.

---

### Features

- Generate single or multiple user agents.
- Built with TypeScript for type safety and maintainability.
- Tested with Vitest and formatted with Prettier for consistent code quality.
- Fully automated CI/CD pipeline via GitHub Actions.

---

## Getting Started

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
npm i @rahulxf/random-user-agent
```

```js
import { generateUserAgents } from '@rahulxf/random-user-agent';

// Generate 5 user agents
const value = generateUserAgents(5);
console.log(value);
```

### Result

```bash
[
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.350.56 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.344.67 Safari/537.36',
  'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.259.94 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.434.38 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.123.89 Safari/537.36'
]
```

<p align="center">
<img src="./src/result.png" alt="result-image" />
</p>

---

**Generate a single user agent:**

- `getUserAgent()` method

```js
import { getUserAgent } from '@rahulxf/random-user-agent';

console.log(getUserAgent());

// 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.123.89 Safari/537.36'

// You can also specify the count (optional)
console.log(getUserAgent(10));
```

### Development & Contribution

If you'd like to contribute or run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/manzil-infinity180/random-user-agent.git
   cd random-user-agent
   npm install
   ```

2. Run tests:

   ```bash
   npm run test
   ```

3. Ensure changes meet the project's standards:
   ```bash
   npm run ci
   ```

This project uses TypeScript for development, Vitest for testing, and Prettier for formatting. All contributions are welcome!

---

### Technology Stack

- **Languages & Tools:** TypeScript, JavaScript, Node.js
- **Testing:** Vitest
- **Code Formatting:** Prettier
- **Automation:** GitHub Actions

---

### Package Details

Here's an overview of the key NPM scripts included:

| Script          | Description                                        |
| --------------- | -------------------------------------------------- |
| `build`         | Compiles TypeScript files to JavaScript.           |
| `ci`            | Runs all checks (build, format, exports, tests).   |
| `format`        | Formats code using Prettier.                       |
| `test`          | Runs tests using Vitest.                           |
| `local-release` | Handles changeset versioning and local publishing. |

---

### License

This project is licensed under the **MIT License**, allowing developers to use, modify, and share freely.

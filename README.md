Certainly, I've updated the documentation to include your `getCookies` function and removed the sections on parsing and deleting cookies. Here's the modified documentation:

```markdown
# cookie-processor Documentation

## Overview
The "cookie-processor" npm package is a JavaScript library for handling HTTP cookies in web applications. This documentation provides information on how to use the package and its installation instructions.

## Installation
To install the "cookie-processor" package, you can use npm or yarn.

```bash
npm install cookie-processor
# or
yarn add cookie-processor
```

## Usage
You can use the "cookie-processor" package to work with cookies in your application. Here are some basic examples of how to use it:

### Creating Cookies
```javascript
const CookieProcessor = require('cookie-processor');

// Create a CookieProcessor instance
const cookies = new CookieProcessor();

// Set a cookie
const cookieString = cookies.createCookies('user_id', '12345', { expires: 3600 });
```

### Retrieving Cookies by Keyword
You can use the `getCookies` function to retrieve a cookie value by keyword.

```javascript
import getCookies from 'cookie-processor';

const cookies = 'user_id=12345; session=abcdef;';

(async () => {
  try {
    const userId = await getCookies(cookies, 'user_id');
    console.log(userId); // Output: '12345'
  } catch (error) {
    console.error('Cookie not found.');
  }
})();
```

## GitHub Repository
For the latest updates, source code, and contributions, you can visit the official GitHub repository:

[cookie-processor GitHub Repository](https://github.com/your-username/cookie-processor)

## Issues and Bug Reports
If you encounter any issues or want to report a bug, please use the [issue tracker](https://github.com/your-username/cookie-processor/issues) on GitHub.

## Contributing
We welcome contributions to the "cookie-processor" package. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Open a pull request on GitHub.

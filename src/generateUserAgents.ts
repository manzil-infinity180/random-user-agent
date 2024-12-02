/**
 *
 * @param count
 * @returns string[]
 * @note This will return bunch of user agents
 */
export function generateUserAgents(count: number): string[] {
  const userAgents: string[] = [];
  const baseOS = [
    'X11; Linux i686',
    'X11; Linux x86_64',
    'X11; Ubuntu i686',
    'X11; Ubuntu x86_64',
    'X11; Fedora i686',
    'Macintosh; Intel Mac OS X 10_15_7',
    'Macintosh; Intel Mac OS X 13_5',
    'Macintosh; Intel Mac OS X 14_0',
    'Windows NT 10.0; Win64; x64',
    'Windows NT 11.0; Win64; x64',
  ];
  // const baseChromeVersion = 111;
  const subVersionMax = 500;
  const webkitVersion = '537.36';
  const safariVersion = '537.36';

  for (let i = 0; i < count; i++) {
    const os = baseOS[Math.floor(Math.random() * baseOS.length)];
    const chromeVersionMajor =
      Math.floor(Math.random() * (115 - 111 + 1)) + 111;
    const chromeVersion = `${chromeVersionMajor}.${Math.floor(
      Math.random() * subVersionMax,
    )}.${Math.floor(Math.random() * 100)}`;
    const userAgent = `Mozilla/5.0 (${os}) AppleWebKit/${webkitVersion} (KHTML, like Gecko) Chrome/${chromeVersion} Safari/${safariVersion}`;
    userAgents.push(userAgent);
  }
  return userAgents;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
/**
 *
 * @returns string | undefined
 * @note This will be called for getting one user agent
 */
export function getUserAgent(max_count = 1000) {
  const generateThousandUserAgent = generateUserAgents(max_count);
  const randomNumber = getRandomInt(max_count);
  return generateThousandUserAgent[randomNumber];
}

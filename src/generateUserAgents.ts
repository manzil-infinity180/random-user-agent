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

const subVersionMax = 500;
const webkitVersion = '537.36';

function generateRandomVersion(min: number, max: number) {
  if (min > max) {
    throw new Error('First argument should be minimum');
  }
  const versionMajor = Math.floor(Math.random() * (max - min + 1)) + min;
  const version = `${versionMajor}.${Math.floor(
    Math.random() * subVersionMax,
  )}.${Math.floor(Math.random() * 100)}`;
  return version;
}

export function generateUserAgents(count: number): string[] {
  const userAgents: string[] = [];

  // const baseChromev = 111;
  const safariVersion = '537.36';

  for (let i = 0; i < count; i++) {
    const os = baseOS[Math.floor(Math.random() * baseOS.length)];
    const chromeVersion = generateRandomVersion(111, 131);
    const userAgent = `Mozilla/5.0 (${os}) AppleWebKit/${webkitVersion} (KHTML, like Gecko) Chrome/${chromeVersion} Safari/${safariVersion}`;
    userAgents.push(userAgent);
  }
  return userAgents;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function generateAndroidAgents(count: number) {
  const userAgents: string[] = [];
  const baseOS = [
    'Linux; Android 10; K',
    'Linux; Android 13; SM-S901B',
    'Linux; Android 13; SM-S908B',
    'Linux; Android 13; SM-A536B',
    'Linux; Android 12; SM-G973F',
    'Linux; Android 13; SM-G991B',
    'Linux; Android 12; SM-G973F',
    'Linux; Android 13; Pixel 6',
    'Linux; Android 13; Pixel 6a',
    'Linux; Android 13; Pixel 6 Pro',
    'Linux; Android 13; Pixel 7',
    'Linux; Android 13; Pixel 7 Pro',
    'Linux; Android 12; moto g pure',
    'Linux; Android 12; moto g stylus 5G',
    'Linux; Android 12; moto g stylus 5G (2022)',
    'Linux; Android 12; moto g 5G (2022)',
    'Linux; Android 12; moto g power (2022)',
    'Linux; Android 11; moto g power (2021)',
    'Linux; Android 12; Redmi Note 9 Pro',
    'Linux; Android 11; Redmi Note 8 Pro',
    'Linux; Android 10; VOG-L29',
    'Linux; Android 10; MAR-LX1A',
    'Linux; Android 13; M2101K6G',
    'Linux; Android 12; M2102J20SG',
    'Linux; Android 12; 2201116SG',
    'Linux; Android 12; DE2118',
  ];
  // const baseChromeVersion = 111;
  const safariVersion = '537.36';

  // Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.3
  for (let i = 0; i < count; i++) {
    const os = baseOS[Math.floor(Math.random() * baseOS.length)];
    const chromeVersionMajor =
      Math.floor(Math.random() * (131 - 110 + 1)) + 110;
    const chromeVersion = `${chromeVersionMajor}.0.0.0`;
    const userAgent = `Mozilla/5.0 (${os}) AppleWebKit/${webkitVersion} (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/${safariVersion}`;
    userAgents.push(userAgent);
  }
  return userAgents;
}

export function generateFirefoxAgents(count: number) {
  const userAgents: string[] = [];
  const baseOS = [
    'X11; Linux i686;',
    'X11; Linux x86_64;',
    'X11; Ubuntu; Linux i686;',
    'X11; Ubuntu; Linux x86_64;',
    'X11; Fedora; Linux x86_64;',
    'Macintosh; Intel Mac OS X 10.15;',
    'Macintosh; Intel Mac OS X 14.7;',
    'Windows NT 11.0; Win64; x64;',
    'Windows NT 10.0; Win64; x64;',
  ];
  // Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0

  for (let i = 0; i < count; i++) {
    const os = baseOS[Math.floor(Math.random() * baseOS.length)];
    const firefoxVersionMajor =
      Math.floor(Math.random() * (133 - 101 + 1)) + 101;
    const userAgent = `Mozilla/5.0 (${os} rv:${firefoxVersionMajor}.0) Gecko/20100101 Firefox/${firefoxVersionMajor}.0`;
    userAgents.push(userAgent);
  }
  return userAgents;
}

export function generateEdgeAgents(count: number) {
  const userAgents: string[] = [];
  // const baseChromeVersion = 111;
  const safariVersion = '537.36';
  // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.2903.86
  for (let i = 0; i < count; i++) {
    const os = baseOS[Math.floor(Math.random() * baseOS.length)];
    const edgeVersionMajor = generateRandomVersion(111, 115);
    const userAgent = `Mozilla/5.0 (${os}) AppleWebKit/${webkitVersion} (KHTML, like Gecko) Chrome/${edgeVersionMajor} Safari/${safariVersion} Edg/${edgeVersionMajor}`;
    userAgents.push(userAgent);
  }
  return userAgents;
}

export function getUserAgent(max_count = 10000) {
  const generateThousandUserAgent = generateUserAgents(max_count);
  const randomNumber = getRandomInt(max_count);
  return generateThousandUserAgent[randomNumber];
}

export function getAndroidAgent(max_count = 1000) {
  const generateThousandUserAgent = generateAndroidAgents(max_count);
  const randomNumber = getRandomInt(max_count);
  return generateThousandUserAgent[randomNumber];
}

export function getFirefoxAgent(max_count = 1000) {
  const generateThousandUserAgent = generateFirefoxAgents(max_count);
  const randomNumber = getRandomInt(max_count);
  return generateThousandUserAgent[randomNumber];
}

export function getEdgeAgent(max_count = 1000) {
  const generateThousandUserAgent = generateEdgeAgents(max_count);
  const randomNumber = getRandomInt(max_count);
  return generateThousandUserAgent[randomNumber];
}

interface IUserAgentType {
  options: {
    type: 'firefox' | 'chrome' | 'android' | 'edge';
    count?: number;
  };
}

export function generateUserAgentOnType({ options }: IUserAgentType) {
  const { type, count = 1 } = options;
  if (!type) {
    throw new Error('types not mentioned');
  }
  switch (type.toLowerCase()) {
    case 'firefox':
      if (count == 1) {
        return getFirefoxAgent();
      } else {
        return generateFirefoxAgents(count);
      }
    case 'chrome':
      if (count == 1) {
        return getUserAgent();
      } else {
        return generateUserAgents(count);
      }
    case 'edge':
      if (count == 1) {
        return getEdgeAgent();
      } else {
        return generateEdgeAgents(count);
      }
    case 'android':
      if (count == 1) {
        return getAndroidAgent();
      } else {
        return generateAndroidAgents(count);
      }
    default:
      throw new Error(`Unsupported user agent type: ${type}`);
  }
}

export function generateUserAgentRandom(count = 10000) {
  let userAgents: string[] = [];
  const types = ['firefox', 'android', 'edge', 'chrome'];
  for (let i = 0; i < count; i++) {
    let randomType = types[Math.floor(Math.random() * types.length)];
    if (!randomType) {
      randomType = 'chrome';
    }
    const getUserAgent = generateUserAgentOnType({
      options: {
        type: 'firefox',
      },
    });
    if (typeof getUserAgent === 'string') {
      userAgents.push(getUserAgent);
    }
  }
  return userAgents;
}

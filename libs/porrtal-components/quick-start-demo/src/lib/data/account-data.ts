export const fetchAccountData = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(accountData);
    }, delay);
  });
};

export const accountData = [
  {
    accountId: 1,
    name: 'Bank of Big Money',
    orders: [
      {
        date: Date.now(),
        item: 'Screen design',
        amount: 1000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 5,
        item: 'Screen development',
        amount: 5000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 10,
        item: 'Screen testing',
        amount: 3000,
      },
    ],
  },
  {
    accountId: 2,
    name: 'Bill Jones',
    orders: [
      {
        date: Date.now(),
        item: 'Slide development',
        amount: 1000,
      },
    ],
  },
  {
    accountId: 3,
    name: 'Waffles R Us',
    orders: [
      {
        date: Date.now(),
        item: 'Screen design',
        amount: 2000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 5,
        item: 'Screen development',
        amount: 8000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 10,
        item: 'Screen testing',
        amount: 5000,
      },
    ],
  },
  {
    accountId: 4,
    name: 'Waffle House',
    orders: [
      {
        date: Date.now(),
        item: 'Screen design',
        amount: 500,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 5,
        item: 'Screen development',
        amount: 2000,
      },
    ],
  },
  {
    accountId: 5,
    name: 'Crypto Bank',
    orders: [
      {
        date: Date.now(),
        item: 'Slide work',
        amount: 1000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 5,
        item: 'Computer order',
        amount: 15000,
      },
      {
        date: Date.now() + 1000 * 60 * 60 * 24 * 10,
        item: 'Programming',
        amount: 21000,
      },
    ],
  },
];

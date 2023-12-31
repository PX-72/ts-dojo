

// as const
const routes = {
    home: '/',
    admin: '/admin',
    users: '/users'
} as const;  // it must use as const for this to work.

// Without 'as const', keys would only be strings, but with 'as const' the actual values are used.

type Route = (typeof routes)[keyof  typeof routes];


const routes2 = {
    home: '/',
    admin: '/admin',
    users: '/users'
} as const;

// not needed as it is already readonly
type ReadOnlyRoutes = Readonly<typeof routes2>
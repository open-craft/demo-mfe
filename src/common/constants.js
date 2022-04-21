// Right now we have our built-in home view that we'll keep just
// to have something at / when testing, but you'll want to
// be thoughtful about what URL you want to have all your
// action at. After all, MFEs can be configured to be on the same
// domain as the LMS, and so a web server like NginX can proxy
// the request to your MFE if it matches the route.
//
// The LMS has no route at /catalog/, so we'll use that.
// To learn more about react routing, check out https://reactrouter.com/
export const ROUTES = {
  HOME: '/',
  Catalog: {
    HOME: '/catalog/',
  },
};

export default { ROUTES };

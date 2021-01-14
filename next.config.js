const withSass = require('@zeit/next-sass')
module.exports = {
    env: {
        SNIPCART_API_KEY: "MDI2OTQxOTItZTg3MS00ZGYyLWEyYjQtYmQxYWNmYzgzNzdlNjM3NDYwNDEwODgzODM3NDU4"
    }
}
/* module.exports = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ["en", "es"],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: "en",
    }
} */

module.exports = withSass();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://agenda-contatos-react.vercel.app',
  },
});
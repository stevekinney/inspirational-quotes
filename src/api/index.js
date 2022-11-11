import shuffle from 'lodash.shuffle';
import { createServer, Model, RestSerializer } from 'miragejs';

import quotes from './quotes.json';

const ApplicationSerializer = RestSerializer.extend({
  root: false,
  embed: true,
});

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,

    serializers: {
      application: ApplicationSerializer,
    },

    fixtures: { quotes },

    models: {
      quote: Model,
    },

    routes() {
      this.timing = 2000;
      this.namespace = 'api';

      this.get('quotes', (schema, request) => {
        const limit = Number(request.queryParams.limit || 10);
        const offset = Number(request.queryParams.offset || 0);
        return schema.quotes.all().slice(offset, limit);
      });
      this.get('quotes/random', (schema) => {
        const [quote] = shuffle(schema.quotes.all().models);
        return quote;
      });
      this.post('quotes');
      this.get('quotes/:id');
      this.patch('quotes/:id');
      this.del('quotes/:id');
    },

    seeds(server) {
      quotes.forEach((quote) => {
        server.schema.quotes.create(quote);
      });
    },
  });
}

import { useEffect, useState } from 'react';
import InspirationalQuote from './quote';
import Quotes from './quotes';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [count, setCount] = useState(10);

  useEffect(() => {
    fetch('/api/quotes?limit=YOUR_COUNT_GOES_HERE')
      .then((res) => res.json())
      .then(({ quotes }) => setQuotes(quotes));
  }, []);

  return (
    <main className="w-full max-w-2xl mx-auto mb-8">
      <Quotes>
        {quotes.map((quote) => (
          <InspirationalQuote
            key={quote.id}
            content={quote.content}
            source={quote.source}
          />
        ))}
      </Quotes>
    </main>
  );
};

export default Application;

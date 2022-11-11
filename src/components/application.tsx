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

  const fetchPosts = (count: number) => {
    fetch(`/api/quotes?limit=${count}`)
      .then((res) => res.json())
      .then(({ quotes }) => setQuotes(quotes));
  };

  useEffect(() => fetchPosts(count), []);

  return (
    <main className="w-full max-w-2xl pb-16 mx-auto">
      <Quotes
        count={count}
        onChange={(e) => setCount(+e.target.value)}
        onSubmit={() => fetchPosts(count)}
      >
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

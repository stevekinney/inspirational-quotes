import { useState } from 'react';
import QuoteFilter from './filters';
import InspirationalQuote from './quote';
import Quotes from './quotes';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

const fetchPosts = async (count: number) => {
  // We don't *need* to use a number, but this solution contains a discussion
  // for what we do with the fact that input[type="number"] gives us strings.
  if (isNaN(count)) return [];
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [count, setCount] = useState(10);

  return (
    <main className="w-full max-w-2xl pb-16 mx-auto">
      <Quotes
        count={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
        onSubmit={() => fetchPosts(count).then(setQuotes)}
      >
        <QuoteFilter />
        <div className="grid grid-cols-2 gap-4">
          {quotes.map((quote) => (
            <InspirationalQuote
              key={quote.id}
              content={quote.content}
              source={quote.source}
            />
          ))}
        </div>
      </Quotes>
    </main>
  );
};

export default Application;

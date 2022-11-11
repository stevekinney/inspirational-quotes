import { useEffect } from 'react';
import InspirationalQuote from './quote';
import Quotes from './quotes';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

const Application = () => {
  const quotes: any[] = [
    {
      id: 1,
      content:
        "Your time is limited, so don't waste it living someone else's life.",
      source: 'Steve Jobs',
    },
    {
      id: 2,
      content: 'The way to get started is to quit talking and begin doing.',
      source: 'Walt Disney',
    },
  ];

  useEffect(() => {
    fetch('/api/quotes?limit=YOUR_COUNT_GOES_HERE')
      .then((res) => res.json())
      .then(({ quotes }) => console.log(quotes));
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

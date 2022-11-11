import { useEffect } from 'react';
import InspirationalQuote from './quote';
import LoadQuotes from './quotes';

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
    fetch('/api/quotes')
      .then((res) => res.json())
      .then(({ quotes }) => console.log(quotes));
  }, []);

  return (
    <main className="w-full max-w-2xl mx-auto">
      <LoadQuotes>
        {quotes.map((quote) => (
          <InspirationalQuote
            key={quote.id}
            content={quote.content}
            source={quote.source}
          />
        ))}
      </LoadQuotes>
    </main>
  );
};

export default Application;
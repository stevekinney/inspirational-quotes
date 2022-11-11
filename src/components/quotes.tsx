import { useState } from 'react';

const LoadQuotes = ({ children, onSubmit }: any) => {
  const [count, setCount] = useState(10);

  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()} className="my-8">
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="0"
            max="25"
            value={count}
            onChange={(e) => setCount(+e.target.value)}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default LoadQuotes;

import { ChangeEventHandler, FormEventHandler, PropsWithChildren } from 'react';

type QuotesProps = {
  count: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const Quotes = ({
  children,
  count,
  onSubmit,
  onChange,
}: PropsWithChildren<QuotesProps>) => {
  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
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
            onChange={onChange}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      {children}
    </section>
  );
};

export default Quotes;

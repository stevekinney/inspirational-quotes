type QuoteFilterProps = {
  filters: QuoteFilters;
  setFilters: any; // Change me!
};

const QuoteFilter = ({ filters, setFilters }: QuoteFilterProps) => {
  return (
    <section className="flex gap-4">
      <label htmlFor="content-filter">
        Filter by quote content
        <input
          id="content-filter"
          name="content"
          value={filters.content}
          onChange={(e) =>
            setFilters((filters: any /* Ugh. */) => ({
              ...filters,
              [e.target.name]: e.target.value,
            }))
          }
          // 👆 This feels like duplicate code.
          placeholder="Filter by quote content"
        />
      </label>
      <label htmlFor="source-filter">
        Filter by source
        <input
          id="source-filter"
          name="source"
          value={filters.source}
          onChange={(e) =>
            setFilters((filters: any /* Ugh. */) => ({
              ...filters,
              [e.target.name]: e.target.value,
            }))
          }
          // 👆 This feels like duplicate code.
          placeholder="Filter by source"
        />
      </label>
    </section>
  );
};

export default QuoteFilter;

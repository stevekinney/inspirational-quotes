type InspirationQuoteProps = {
  content: string;
  source?: string;
};

const InspirationalQuote = ({ content, source }: InspirationQuoteProps) => {
  return (
    <article className="quote">
      {content && <p className="quote-content">{content}</p>}
      {source && <p className="quote-source">{source}</p>}
    </article>
  );
};

export default InspirationalQuote;

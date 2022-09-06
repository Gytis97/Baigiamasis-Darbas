const Card = ({ className, children, id }) => {
  return (
    <article className={`card ${className}`} id={id}>
      {children}
    </article>
  );
};

export default Card;

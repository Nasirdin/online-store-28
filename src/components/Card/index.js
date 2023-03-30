const Card = ({ product }) => {
  console.log(product);
  return (
    <div className="card">
      <img className="card__img" src={product.image} />
      <h3 className="card__title">{product.title}</h3>
      <p className="card__description">{product.description}</p>
      <p className="card__price">rftyui </p>
      <p className="card__count">rtyunimo </p>
    </div>
  );
};

export default Card;

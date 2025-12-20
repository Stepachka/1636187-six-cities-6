export type TPlaceCardProps = {
  cost: number;
  type: string;
  name: string;
  rating: number;
  img: string;
  isSaved: boolean;
  isPremium: boolean;
};

export const PlaceCard = ({
  cost,
  type,
  name,
  rating,
  img,
  isSaved,
  isPremium,
}: TPlaceCardProps) => {
  const tagSaved = (statusSaved: boolean) => {
    if (statusSaved) {
      return (
        <button
          className="place-card__bookmark-button place-card__bookmark-button--active button"
          type="button"
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      );
    }
  };

  const tagPremium = (statusPremium: boolean) => {
    if (statusPremium) {
      return (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      );
    }
  };

  return (
    <article className="cities__card place-card">
      {tagPremium(isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={img}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {tagSaved(isSaved)}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

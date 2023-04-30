import { Link, useLocation } from "react-router-dom";
import { ALL_CATEGORIES_KEY } from "../../../../utils/constants";

interface Props {
  categories: string[];
}

const Categories = ({ categories }: Props) => {
  const location = useLocation();

  return (
    <ul>
      <li key={ALL_CATEGORIES_KEY}>
        <Link to={`${location.pathname}?c=${ALL_CATEGORIES_KEY}`}>All</Link>
      </li>
      {categories.map((category) => (
        <li key={category}>
          <Link to={`${location.pathname}?c=${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;

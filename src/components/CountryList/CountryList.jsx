import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries.map(({ country, flag, id }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`} state={{ from: location }}>
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

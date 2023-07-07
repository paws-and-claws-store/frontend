import { Link } from 'react-router-dom';

export const GoBack = ({ path }) => {
  return (
    <div>
      <div
        style={{
          marginBottom: '60px',
          color: '#f2f2f2',
          letterSpacing: '0.06em',
          textDecoration: 'underline',

          borderColor: 'gray',
        }}
      >
        <Link to={path}>Back to Countries</Link>
      </div>
    </div>
  );
};

import FadeUp from './FadeUp';

const Credits = ({
  credits,
  columns = 1,
  className = 'text-xs md:text-sm lg:text-base m-4 lg:m-8 my-16',
}) => (
  <div className={className}>
    <div className={columns === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1' : ''}>
      {credits.map((credit, index) => (
        <FadeUp key={index}>
          <p>{credit.role} - {credit.name}</p>
        </FadeUp>
      ))}
    </div>
  </div>
);

  export default Credits;

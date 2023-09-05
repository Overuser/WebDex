import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './loader.scss';

const Loader = () => {
  return ( 
    <div className='home__content'>
      <SkeletonTheme baseColor="#2c2c2c" highlightColor="#2f2f2f">
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
        <div className="skeleton__pokedex-card">
          <Skeleton containerClassName='skeleton__pokedex-card__image' className='skeleton-image' />
          <Skeleton containerClassName='skeleton__pokedex-card__name' className='skeleton-link' />
          <Skeleton containerClassName='skeleton__pokedex-card__types' className='skeleton-type' />
        </div>
      </SkeletonTheme>
    </div>
  );
}
 
export default Loader;
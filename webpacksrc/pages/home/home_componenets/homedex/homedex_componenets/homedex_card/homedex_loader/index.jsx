import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './loader.scss';

const Loader = () => {
  return ( 
    <div className='home__content'>
      <SkeletonTheme baseColor="rgba(0, 0, 0, 0.3)" highlightColor="rgba(255, 255, 255, 0.5)">
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
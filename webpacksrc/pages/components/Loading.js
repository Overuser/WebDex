import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return ( 
    <div className='home__dex'>
      <SkeletonTheme baseColor="#333745" highlightColor="#444">
        <div className="skeleton__block">
          <Skeleton containerClassName='skeleton-image-container' className='skeleton-image' />
          <Skeleton containerClassName='skeleton-link-container' className='skeleton-link' />
          <Skeleton containerClassName='skeleton-type-container' className='skeleton-type' />
        </div>
        <div className="skeleton__block">
          <Skeleton containerClassName='skeleton-image-container' className='skeleton-image' />
          <Skeleton containerClassName='skeleton-link-container' className='skeleton-link' />
          <Skeleton containerClassName='skeleton-type-container' className='skeleton-type' />
        </div>
        <div className="skeleton__block">
          <Skeleton containerClassName='skeleton-image-container' className='skeleton-image' />
          <Skeleton containerClassName='skeleton-link-container' className='skeleton-link' />
          <Skeleton containerClassName='skeleton-type-container' className='skeleton-type' />
        </div>
        <div className="skeleton__block">
          <Skeleton containerClassName='skeleton-image-container' className='skeleton-image' />
          <Skeleton containerClassName='skeleton-link-container' className='skeleton-link' />
          <Skeleton containerClassName='skeleton-type-container' className='skeleton-type' />
        </div>
        <div className="skeleton__block">
          <Skeleton containerClassName='skeleton-image-container' className='skeleton-image' />
          <Skeleton containerClassName='skeleton-link-container' className='skeleton-link' />
          <Skeleton containerClassName='skeleton-type-container' className='skeleton-type' />
        </div>
        <div className="skeleton__block">
          <Skeleton containerClassName='skeleton-image-container' className='skeleton-image' />
          <Skeleton containerClassName='skeleton-link-container' className='skeleton-link' />
          <Skeleton containerClassName='skeleton-type-container' className='skeleton-type' />
        </div>
        <div className="skeleton__block">
          <Skeleton containerClassName='skeleton-image-container' className='skeleton-image' />
          <Skeleton containerClassName='skeleton-link-container' className='skeleton-link' />
          <Skeleton containerClassName='skeleton-type-container' className='skeleton-type' />
        </div>
        <div className="skeleton__block">
          <Skeleton containerClassName='skeleton-image-container' className='skeleton-image' />
          <Skeleton containerClassName='skeleton-link-container' className='skeleton-link' />
          <Skeleton containerClassName='skeleton-type-container' className='skeleton-type' />
        </div>
      </SkeletonTheme>
    </div>
  );
}
 
export default Loading;


import { useEffect } from 'react';
import RightPanel from '../components/right-panel';
import Title from '../components/title';
import { loadOptions } from '../slice/banner-slice';
import { useAppDispatch } from '../../../app/hooks';

const Banner = () => {
  const dispatch = useAppDispatch();

  // const getOptions = useCallback(() => {
  //   dispatch(loadOptions());
  // }, [dispatch]);

  useEffect(() => {
    // getOptions();
    dispatch(loadOptions());
  }, [dispatch]);

  return (
    <div className="mt-12 pt-1 w-full bg-sand ">
      <div className="flex container mx-auto w-10/12">
        <div className="md:flex justify-between">
          <Title />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Banner;

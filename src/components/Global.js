import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalCoinsAction } from '../redux/global/global';

const Global = () => {
  const dispatch = useDispatch();
  const global = useSelector((state) => state.global.global);

  React.useEffect(() => {
    dispatch(globalCoinsAction());
  }, [dispatch]);

  return (
    <div className="slide">
      <img className="main-logo" src="https://logo.com/image-cdn/images/kts928pd/production/20f6a76a784ac9a59b56e1805bbe1078a743976a-343x338.png?w=1080&q=72" alt="crypto" />

      <div className="active-crypto">
        <h4>In Action</h4>
        <p>
          {global}
          {' '}
          currencies
        </p>
      </div>

    </div>
  );
};

export default Global;

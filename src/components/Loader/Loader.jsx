import { ColorRing } from 'react-loader-spinner';
import css from "./Loader.module.css"


export const Loader = ({ loading }) => (
  <>
    {loading && (
      <div className={css.loaderContainer}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#6FC3DF', '#78DCE8', '#A5DEF1', '#92CEDD', '#A2D2E9']}
        />
      </div>
    )}
  </>
);
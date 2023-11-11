import classNames from 'classnames';
import { LoadingIcon, LogoIcon } from '../Icons';
import './loading-component.scss';

type Props = {
  initial?: boolean;
  size?: 'default' | 'sm';
};

function LoadingComponent({ initial = false, size = 'default' }: Props) {
  return (
    <div className="loading">
      {initial ? (
        <LogoIcon className="logo-icon" />
      ) : (
        <LoadingIcon className={classNames('loading-icon', size)} />
      )}
    </div>
  );
}

export default LoadingComponent;

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import './avatar.scss';

type Props = {
  src?: string;
  alt?: string;
};

function Avatar({ src, alt }: Props) {
  return (
    <AvatarPrimitive.Root className="avatar-root">
      <AvatarPrimitive.Image className="avatar-image" src={src} alt={alt} />
      <AvatarPrimitive.Fallback className="avatar-fallback">
        {alt?.at(0)}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}

export default Avatar;

import './title.scss';

type Props = { title: string };

function Title({ title }: Props) {
  return <h1 className="main-title">{title}</h1>;
}

export default Title;

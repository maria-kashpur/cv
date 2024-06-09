import "./../../../styles/variables.scss";

interface Props {
  width: number;
  height: number;
  color: string;
}

export default function Arrow({width, height, color}: Props) {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 512 512">
      <path
        d="m396.6 160 19.4 20.7L256 352 96 180.7l19.3-20.7L256 310.5z"
        fill={color}
        className="fill-000000"></path>
    </svg>
  );
}

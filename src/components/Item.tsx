type Props = {
  number: string;
};

export const Item = ({ number }: Props) => <li data-cy="item">{number}</li>;

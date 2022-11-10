export interface IProps {
  children: string;
  variant: string;
}

export const Button = ({ variant, children }: IProps) => {
  return (
    <button className={`${variant}__btn`} type="button">
      {children}
    </button>
  );
};

export interface IButtonProps {
  children: React.ReactNode;
  parent: string;
}

export const Button: React.FC<IButtonProps> = ({ children, parent = "" }) => {
  return (
    <button className={`${parent}-btn`} type="button">
      {children}
    </button>
  );
};

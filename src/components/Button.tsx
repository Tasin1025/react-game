
interface Props {
    children: string;
    color?: string;
    onClick2: () => void;
}

const Button = ({children, onClick2, color = "primary"}: Props) => {
  return (
    <div> 
        <button type="button" className={"btn btn-"+color} onClick={onClick2}>{children}</button>
    </div>
  )
}

export default Button
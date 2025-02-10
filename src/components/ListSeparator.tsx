import classes from './ListSeparator.module.css';

type ListSeparatorProps = {
  heading: string;
}

export function ListSeparator({heading}: ListSeparatorProps){
  return (
    <div className={`${classes.listSeparator}`}>
      <div>{heading}</div>
      <div>&#8964;</div>
    </div>
    );
}
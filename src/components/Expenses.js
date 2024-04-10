import Information from "./Expenseitem";
import './Expenses.css';
import Card from'./Card';
function Expenses(props) {
    return (
        <Card className="expenses">
            <Information name={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <Information name={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            <Information name={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
            <Information name={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
        </Card>
    )
}
export default Expenses;
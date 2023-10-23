import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <div>
      <Button type="small" onClick={handleDeleteItem}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;

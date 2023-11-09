import { TodoIcon } from '.'

function DeleteIcon({ onRemove }) {
    return (
        <TodoIcon
        type="delete"
        color="gray"
        onClick={onRemove}
        />
    )
}

export { DeleteIcon };
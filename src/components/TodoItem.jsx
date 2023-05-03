import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    return (
        <article className="flex gap-4 border-b border-b-gray-400">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    todo.completed
                        ? "flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                        : "inline-block"
                }`}
                onClick={() => updateTodo(todo.id)}
            >
                {todo.completed && <IconCheck />}
            </button>
            <p
                className={`grow text-gray-600 ${
                    todo.completed && "line-through"
                }`}
            >
                {todo.title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(todo.id)}>
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;

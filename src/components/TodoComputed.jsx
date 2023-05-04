const TodoComputed = ({totalNoCompletedTodo, clearCompleted}) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4 dark:bg-gray-800 transition-all duration-1000">
            <span className="text-gray-400"> {totalNoCompletedTodo} items left</span>
            <button className="text-gray-400" onClick={clearCompleted}>Clear Completed</button>
        </section>
    );
};

export default TodoComputed;

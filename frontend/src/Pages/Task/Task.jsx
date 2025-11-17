import TaskFilter from "./TaskFilter";
import AddTaskForm from "./AddTaskForm";

export default function Task() {
    return (
        <div>
            <div className="flex justify-between">
                <TaskFilter />
                <AddTaskForm />
            </div>

        </div>
    )
}
import TaskFilter from "./TaskFilter";
import AddTaskForm from "./AddTaskForm";
import TaskLoad from "./TaskLoad";

export default function Task() {
    return (
        <div>
            <div className="flex justify-between">
                <TaskFilter />
                <AddTaskForm />
            </div>
            <div>
                <TaskLoad/>
            </div>

        </div>
    )
}
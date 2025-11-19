import { useEffect, useState } from "react";
import { useFilter } from "../../Context/FilterContext";

export default function TaskLoad() {
    const { filters } = useFilter();

    // DEMO DATA (matches your Add Task form)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Complete UI Design",
            description: "Finish card UI, filter dropdown, and responsive layouts.",
            priority: "High",
            taskDate: "2025-11-23",
            shareEmail: "friend@example.com",
            repeat: "None",
            status: "Pending",
            done: false,
        },
        {
            id: 2,
            title: "Fix Responsive Issues",
            description: "Make sidebar and dropdown fully responsive.",
            priority: "Medium",
            taskDate: "2025-11-25",
            shareEmail: "",
            repeat: "Daily",
            status: "In Progress",
            done: false,
        },
        {
            id: 3,
            title: "Fix Responsive Issues",
            description: "Make sidebar and dropdown fully responsive.",
            priority: "Medium",
            taskDate: "2025-11-25",
            shareEmail: "",
            repeat: "Daily",
            status: "In Progress",
            done: false,
        },{
            id: 4,
            title: "Exercise",
            description: "Make sidebar and dropdown fully responsive.",
            priority: "Medium",
            taskDate: "2025-11-25",
            shareEmail: "",
            repeat: "Daily",
            status: "In Progress",
            done: false,
        },
    ]);

    // Toggle task complete
    const toggleDone = (id) => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, done: !t.done } : t
        ));
    };

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filters(t => t.id !== id));
    };

    useEffect(() => {
        console.log("Filter Applied:", filters);
    }, [filters]);

    // ---------------- CARD COMPONENT ----------------
    const TaskCard = ({ task }) => {
        const [showDesc, setShowDesc] = useState(false);

        return (
            <div
                onClick={() => setShowDesc(!showDesc)}
                className={`bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer
                ${task.done ? "opacity-60" : "opacity-100"}`}
            >
               
                <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => toggleDone(task.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-5 h-5 mt-1 accent-blue-600 cursor-pointer"
                        />
                        <h3 className={`text-lg font-semibold 
                            ${task.done ? "line-through text-gray-500" : "text-gray-800"}`}>
                            {task.title}
                        </h3>
                    </div>

                  
                    <span
                        className={`px-3 py-1 text-xs rounded-full
                        ${task.priority === "High" ? "bg-red-100 text-red-600" : ""}
                        ${task.priority === "Medium" ? "bg-yellow-100 text-yellow-700" : ""}
                        ${task.priority === "Low" ? "bg-green-100 text-green-600" : ""}`}
                    >
                        {task.priority}
                    </span>
                </div>

               
                <p className="hidden md:block text-gray-600 text-sm mt-3">
                    {task.description}
                </p>

                
                {showDesc && (
                    <p className="md:hidden text-gray-700 text-sm mt-3">
                        {task.description}
                    </p>
                )}

               
                <div className="mt-4 space-y-1 text-sm text-gray-700">
                    <p><span className="font-medium">Task Date:</span> {task.taskDate}</p>
                    {task.shareEmail && (
                        <p><span className="font-medium">Shared With:</span> {task.shareEmail}</p>
                    )}
                    <p><span className="font-medium">Repeat:</span> {task.repeat}</p>
                </div>

                
                <div className="flex justify-between items-center mt-4 pt-3 border-t">
                    <span className="text-xs text-gray-500">{task.status}</span>

                    <div className="flex gap-3">
                        <button
                            className="text-blue-600 hover:text-blue-800 text-sm"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Edit
                        </button>

                        <button
                            className="text-red-500 hover:text-red-700 text-sm"
                            onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    };
  

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function AddTaskForm() {

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string(),
    priority: Yup.string().required("Priority is required"),
    shareWith: Yup.string().email("Invalid email"),
    repeat: Yup.string().required("Required"),
    taskDate: Yup.string().required("Task date is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Task Created:", values);

    alert("Task Added Successfully!");
    resetForm();

    
    document.getElementById("closeModalBtn").click();
  };

  return (
    <>
    
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addTaskModal"
      >
        Add Task
      </button>

      
      <div className="modal fade" id="addTaskModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Add Task</h5>
              <button
                id="closeModalBtn"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">

              <Formik
                initialValues={{
                  title: "",
                  description: "",
                  priority: "",
                  shareWith: "",
                  repeat: "None",
                  taskDate: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form className="d-flex flex-column gap-3">

                  
                    <div>
                      <label className="form-label">Task Title</label>
                      <Field
                        name="title"
                        type="text"
                        className="form-control"
                        placeholder="Enter task title"
                      />
                      <ErrorMessage name="title" className="text-danger" component="div" />
                    </div>

                    
                    <div>
                      <label>Description</label>
                      <Field
                        name="description"
                        as="textarea"
                        className="form-control"
                        placeholder="Add task details"
                      />
                    </div>

                    
                    <div>
                      <label className="form-label">Priority</label>
                      <Field as="select" name="priority" className="form-select">
                        <option value="">Select priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </Field>
                      <ErrorMessage name="priority" className="text-danger" component="div" />
                    </div>

                   
                    <div>
                      <label className="form-label">Task Date</label>
                      <Field
                        name="taskDate"
                        type="date"
                        className="form-control"
                      />
                      <ErrorMessage name="taskDate" className="text-danger" component="div" />
                    </div>

                    
                    <div>
                      <label>Share with Friend (Email)</label>
                      <Field
                        name="shareWith"
                        type="email"
                        className="form-control"
                        placeholder="friend@example.com"
                      />
                      <ErrorMessage name="shareWith" className="text-danger" component="div" />
                    </div>

                    
                    <div>
                      <label>Repeat Task</label>
                      <Field as="select" name="repeat" className="form-select">
                        <option value="None">None</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                      </Field>
                    </div>

                    
                    <div className="modal-footer mt-3 p-0">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Add Task
                      </button>
                    </div>

                  </Form>
                )}
              </Formik>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

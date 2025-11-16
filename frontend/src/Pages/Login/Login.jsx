import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function Login() {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);

    alert("Login Successful!");

    resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
      
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="p-5 sm:p-10">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6 w-full">
            
        
            <h2 className="text-2xl font-bold text-center">Login</h2>

            
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Email</label>
              <Field
                name="email"
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 
                           focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Password</label>
              <Field
                name="password"
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 
                           focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg 
                           hover:bg-blue-700 transition"
              >
                Login
              </button>

              <button
                type="reset"
                className="flex-1 bg-gray-300 text-black py-2 rounded-lg 
                           hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
}

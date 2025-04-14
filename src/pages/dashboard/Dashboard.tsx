import Select from "react-select";
import Container from "../../components/container/Container";
import { createProduct } from "../../services/api";
import { useFormik } from "formik";
import * as Yup from "yup";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Dashboard() {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      image: "",
      description: "",
      selectedOption: { value: "chocolate", label: "Chocolate" },
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(5, "Error")
        .required("Required"),
      price: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      image: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      description: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      createProduct(values);
    },
  });

  return (
    <div>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-gray-200 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-4 py-10">
            <input
              className="bg-white"
              placeholder="title"
              name="title"
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange}
            />

            <input
              className="bg-white"
              placeholder="price"
              name="price"
              type="text"
              value={formik.values.price}
              onChange={formik.handleChange}
            />

            <input
              className="bg-white"
              placeholder="image"
              name="image"
              type="text"
              value={formik.values.image}
              onChange={formik.handleChange}
            />

            <Select
              value={formik.values.selectedOption}
              onChange={(selected) => {
                formik.setValues((currentValues) => ({
                  ...currentValues,
                  selectedOption: selected as any,
                }));
              }}
              options={options}
            />

            <textarea
              className="bg-white"
              placeholder="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </Container>
    </div>
  );
}

export default Dashboard;

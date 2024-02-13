import { FieldValues, useForm } from "react-hook-form";
import { object, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" }),
  age: z.number({ invalid_type_error: "Amount is required." }).min(1),
  category: z.string({required_error: "Category is required."}).min(0, {message: ""})
});

type FormData = z.infer<typeof schema>;

  const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Description
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="from-label">
          Amount
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <div className="mb-3" >
        <label htmlFor="category" className="from-label">
          Category
        </label>
        <select
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control"
          // {...register("category")}
        >
          <option selected></option>
          <option value="US">Groceries</option>
          <option value="CA">Utilities</option>
          <option value="FR">Entertaiment</option>
        </select>
        {errors.category && <p className="text-danger">{errors.category.message}</p>}
      </div>
      <button  className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

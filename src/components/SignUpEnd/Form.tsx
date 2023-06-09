import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useEmail from "../../store";

const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "Field cannot be empty" })
    .email({ message: "Enter a valid email" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const setEmail = useEmail((s) => s.setEmail);
  return (
    <form className="form">
      <div className="input-meta">
        <label className="form-label" htmlFor="email">
          Email address
        </label>
        {errors.email && (
          <strong className="error-msg">{errors.email.message}</strong>
        )}
      </div>
      <input
        {...register("email", { required: true })}
        className={errors.email ? "email-input error" : "email-input"}
        type="email"
        id="email"
        name="email"
        placeholder="email@company.com"
      />
      <button
        onClick={handleSubmit((data) => {
          setEmail(data.email);
          reset();
        })}
        className="submit-button"
        type="submit"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;

import { useForm } from "react-hook-form";
export default function CreeProduit({ sup = () => {} }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-8 flex items-center flex-col">
      <h1 className="font-semibold text-2xl p-4">Creation d'un produit </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 ">
          <Text
            value={errors.nom?.type === "required" ? "Nom is required" : "Nom"}
            className={` ${
              errors.nom?.type === "required"
                ? "text-opacity-100 text-red-500"
                : ""
            }`}
          />
          <Input
            type="text"
            placeholder="Nom de produit"
            register={register}
            required={true}
            label="nom"
            errors={errors}
          />

          <Text value="Description" />
          <Input
            type="text"
            placeholder="votre description"
            register={register}
            required
            label="description"
            errors={errors}
          />
          <Text> stock</Text>
          <Input
            type="number"
            placeholder="stockage"
            register={register}
            required
            label="stock"
            errors={errors}
          />
        </div>
        <div className=" mt-4 flex ">
          <Button
            type="button"
            value="Annuler"
            className=" m-2 shadow-xl font-semibold"
            onClick={sup}
          />
          <Button
            type="submit"
            value="Enregistrer"
            className="m-2 shadow-xl font-semibold"
          />
        </div>
      </form>
    </div>
  );
}

function Input({
  value,
  placeholder,
  type,
  className,
  register,
  required,
  label,
  errors,
}) {
  return (
    <div>
      <input
        {...register(label, { required })}
        type={type}
        placeholder={placeholder}
        value={value}
        className={` rounded p-2 ${
          className ? className : `ring ring-gray-300`
        }`}
      />
    </div>
  );
}

function Button({ value, placeholder, type, className, onClick = () => {} }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={` rounded p-2 ${className ? className : `ring ring-gray-300`}`}
      onClick={onClick}
    />
  );
}
function Text({ value, children, className }) {
  return <p className={`py-2 text-xl ${className}`}>{children ?? value}</p>;
}

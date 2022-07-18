const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function Input({ 
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass,
}) {
    return (
        <>
            <div className="my-5">
                <label htmlFor={labelFor} className="block text-gray-700 text-sm font-bold mb-2">
                    {labelText}
                </label>
                <input
                    className={`${fixedInputClass} ${customClass}`}
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required={isRequired}
                />
            </div>
        </>
    )
}
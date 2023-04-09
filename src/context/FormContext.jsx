import React, { createContext, useState } from "react";

export const FormContext = createContext(null);

const FormContextProvider = ({ children }) => {
	const [formState, setFormState] = useState("");
	return (
		<FormContext.Provider value={{ formState, setFormState }}>
			{children}
		</FormContext.Provider>
	);
};

export default FormContextProvider;

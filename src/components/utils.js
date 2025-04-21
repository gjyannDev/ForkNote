export function handleError(error, functionName) {
  console.error(`Error in ${functionName}:`, error.message || error);
}

export function generateInput(labelName, inputType, name, options = [], value = "", withLabel = true) {
  const inputContainer = document.createElement("div");
  const inputLabel = document.createElement("p");
  const input = document.createElement("input");
  const textarea = document.createElement("textarea");
  const select = document.createElement("select");

  inputContainer.setAttribute("class", "input__container");
  input.setAttribute("type", inputType);
  input.setAttribute("name", name);
  inputLabel.setAttribute("class", "input__label");
  input.setAttribute("class", "input");
  textarea.setAttribute("class", "text__area");
  textarea.setAttribute("name", name);
  select.setAttribute("class", "select");
  select.setAttribute("name", name);
  input.value = value;
  textarea.value = value;
  
  inputLabel.textContent = labelName;
  
  if (inputType === "select") {
    options.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.label;
      select.appendChild(option);
    });

    if (options.some((opt) => opt.value === value)) {
      select.value = value; 
    } else {
      const fallbackOption = document.createElement("option");
      fallbackOption.value = labelName;
      fallbackOption.textContent = labelName;
      select.appendChild(fallbackOption); 
      select.value = labelName; 
    }
  }

  //Appending the content to the DOM
  if (withLabel) inputContainer.appendChild(inputLabel);

  if (inputType === "textarea") {
    inputContainer.appendChild(textarea);
  } else if (inputType === "select") {
    inputContainer.appendChild(select);
  } else {
    inputContainer.appendChild(input);
  }

  return inputContainer;
}

export function formatFirebaseTimestamp(timestamp) {
  try {
    let date;

    // Check if the timestamp is a Firestore Timestamp object
    if (timestamp && typeof timestamp.toDate === "function") {
      date = timestamp.toDate();
    } 
    // Check if the timestamp is a valid JavaScript Date object
    else if (timestamp instanceof Date) {
      date = timestamp;
    } 
    // Check if the timestamp is a string or number (e.g., UNIX timestamp)
    else if (typeof timestamp === "string" || typeof timestamp === "number") {
      date = new Date(timestamp);
    } 
    // If none of the above, throw an error
    else {
      throw new Error("Invalid timestamp format");
    }

    // Format the date
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  } catch (error) {
    console.error("Error formatting timestamp:", error);
    return "Invalid Date"; // Fallback value
  }
}
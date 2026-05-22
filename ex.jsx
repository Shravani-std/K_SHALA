const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name,
    email,
    message,
  };

  const response = await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  alert(result.message);
};
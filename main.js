function getMessages(input_data, count) {
  fetch(encodeURI(`http://0.0.0.0:8000/generate_chat/?input_data=${input_data}&count=${count}`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error("Error:", error));
}
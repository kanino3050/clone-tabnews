function status(request, response) {
  response.status(200).json({
    code: 200,
    status: "online",
  });
}

export default status;

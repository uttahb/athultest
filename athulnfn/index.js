

const handler = async (event) => {

  const {req, res} = event
  console.log(req.params);
  // this is a new comment
  // health check
  if (req.params.health === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
    return
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Happy Hacking`}))
  res.end()
  
}

export default handler

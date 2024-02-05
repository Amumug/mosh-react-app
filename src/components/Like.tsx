import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

function Like() {
  const [status, setStatus] = useState(false);

  if (status) return <AiFillHeart color="red" size={50} onClick={() => setStatus(false)}/>;
  return <CiHeart size={50} onClick={() => setStatus(true)}/>;
}

export default Like;

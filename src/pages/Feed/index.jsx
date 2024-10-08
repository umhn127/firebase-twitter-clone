import { useEffect, useState } from "react";
import Aside from "./Aside";
import Main from "./Main";
import Nav from "./Nav";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";

const Feed = () => {
  // kullanıcı state'i
  const [user, setUser] = useState(null);

  useEffect(() => {
    // anlık olarak kullanıcı oturumundaki değişimi izler
    const unsub = onAuthStateChanged(auth, (user_data) => {
      // state'i güncelle
      setUser(user_data);
    });
    // sayfadan ayrılma anında onAuthSrtateChanged in görevini sonlandır
    return () => unsub();
  }, []);
  return (
    <div className="feed h-screen bg-black overflow-hidden">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};

export default Feed;

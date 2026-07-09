useEffect(() => {
  const saved = localStorage.getItem('user');
  if (saved) setUser(JSON.parse(saved));
}, []);

useEffect(() => {
  if (user) localStorage.setItem('user', JSON.stringify(user));
  else localStorage.removeItem('user');
}, [user]);
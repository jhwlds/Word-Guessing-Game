export const fetchRandomWord = async (length) => {
    try {
      const res = await fetch(`https://random-word-api.vercel.app/api?words=1&length=${length}`);
      const data = await res.json();
      return data[0];
    } catch (err) {
      console.error("Failed to get a word:", err);
      throw err;
    }
  };
export const getApi = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      return false;
    }

    return res.json();
  } catch (error) {
    return false;
  }
};
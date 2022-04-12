const cacheImage = async (path: string) =>
  new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(path);
    img.onerror = (e) => reject(e);
    img.src = path;
  });

export default cacheImage;

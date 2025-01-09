export const dataToFormData = (data: Record<string, string | File | null | undefined>) => {
  const formData = new FormData();

  for (const key in data) {
    if (data[key] !== undefined && data[key] !== null) {
      formData.append(key, data[key] as string | File);
    }
  }

  return formData;
};

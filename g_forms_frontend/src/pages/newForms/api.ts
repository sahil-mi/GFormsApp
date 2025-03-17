const base_url = "http://127.0.0.1:8000/";

export const publishForm = async (payload: publishFormPayload) => {
  const response = await fetch(base_url + "api/forms/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const getFormData = async (
  formUniqID: number | string
): Promise<FormResponseData | null> => {
  const url = base_url + `api/forms/${formUniqID}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const res_data = await response.json();
    return res_data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

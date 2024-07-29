import { PostApi } from "./APIs/FullAPI";

const ContactForm = async (formData) => {
  const url =
    "/api/v1/save_contact?" +
    "fullname=" +
    formData?.fullname +
    "&email=" +
    formData?.email +
    "&company=" +
    formData?.company +
    "&phone=" +
    formData?.phone +
    "&subject=" +
    formData?.subject +
    "&country=" +
    formData?.country +
    "&message=" +
    formData?.message;
  return PostApi(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error submitting the form:", error);
      throw error;
    });
};

export default ContactForm;

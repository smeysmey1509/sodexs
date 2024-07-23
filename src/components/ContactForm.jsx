import React, { useEffect, useState } from "react";
import { PostApi } from "./APIs/FullAPI";

const ContactForm = ({ formData }) => {
    const response = PostApi('/api/v1/save_contact', formData);
    console.log('responseresponse',response)
//   return PostApi('/api/v1/save_contact', formData);
};

export default ContactForm;

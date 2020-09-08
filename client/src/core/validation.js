export default function validate(values) {
  let errors = {};
  if (!values.fullname) {
    errors.fullname = "Name is required";
  } else if (/[^a-zA-Z\-\/]/i.test(values.fullname)) {
    errors.fullname = "Name is invalid";
  }

  if (!values.city) {
    errors.city = "City is required";
  } else if (/[^a-zA-Z\-\/]/i.test(values.city)) {
    errors.city = "City is invalid";
  }

  if (!values.state) {
    errors.state = "State is required";
  } else if (/[^a-zA-Z\-\/]/i.test(values.state)) {
    errors.state = "State is invalid";
  }

  if (!values.zip) {
    errors.zip = "Zip is required";
  } else if (values.zip.length > 6) {
    errors.zip = "Zip must contains atleast 5 numbers";
  }

  if (!values.address) {
    errors.address = "Address is required";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.phonenumber) {
    errors.phonenumber = "Phone number is required";
  } else if (values.phonenumber.length > 10) {
    errors.phonenumber = "Phone number must be 10 numbers";
  }

  return errors;
}

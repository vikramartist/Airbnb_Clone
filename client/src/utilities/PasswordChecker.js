import validator from "password-validator";

const schema = new validator();

schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .digits(2)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .not()
  .spaces()
  .is()
  .not()
  .oneOf(["Password123", "12345678", "87654321"])
  .has()
  .symbols(1, "should have atleast 1 special character");

export default schema;

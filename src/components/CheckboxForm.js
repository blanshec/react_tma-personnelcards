import React from "react";

function CheckboxForm() {
  return (
    <form>
      <label for="checkbox-one">
        One
        <input type="checkbox" name="chekbox-one" />
      </label>

      <label for="checkbox-two">
        Two
        <input type="checkbox" name="chekbox-two" />
      </label>

      <label for="checkbox-three">
        Three
        <input type="checkbox" name="chekbox-three" />
      </label>

      <label for="checkbox-four">
        Four
        <input type="checkbox" name="chekbox-four" />
      </label>
    </form>
  );
}

export default CheckboxForm;

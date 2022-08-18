function requiredFieldsCheck() {
  const allElements = document.getElementsByClassName("form__input-group");
  for (const element of allElements) {
    let fieldLabel = "label" + element.id;
    let fieldName = element.id;
    let inputField = "input" + element.id;
    let error = "errorMessage" + element.id;
    const inputValue = document.getElementById(inputField);
    const label = document.getElementById(fieldLabel);
    const errorMessage = document.getElementById(error);
    inputValue.addEventListener("click", (e) => {
      label.classList.remove("labelEmpty");
      label.classList.add("labelFull");
    });
    inputValue.addEventListener("focus", (e) => {
      label.classList.remove("labelEmpty");
      label.classList.add("labelFull");
    });
    inputValue.addEventListener("focusout", (e) => {
      let empt = document.forms["form1"][fieldName].value;
      if (empt == "") {
        label.classList.remove("labelFull");
        label.classList.add("labelEmpty");
      } else {
        label.classList.remove("labelEmpty");
        label.classList.add("labelFull");
      }
    });
    inputValue.addEventListener("change", (e) => {
      e.preventDefault();
      let field = document.forms["form1"][fieldName];
      if (field.value == "" && inputValue.hasAttribute("required")) {
        inputValue.classList.add("form__input-error");
        label.classList.remove("labelFull");
        label.classList.add("labelEmpty");
        errorMessageAllFields.style.display = "block";
      } else if (!field.checkValidity() && errorMessage != null) {
        errorMessage.style.display = "block";
        inputValue.classList.add("form__input-error");
      } else if (field.value == "" && errorMessage != null) {
        errorMessage.style.display = "none";
        inputValue.classList.add("form__input-error");
      } else if (field.checkValidity() && errorMessage != null) {
        errorMessage.style.display = "none";
        inputValue.classList.remove("form__input-error");
      } else {
        inputValue.classList.remove("form__input-error");
        label.classList.remove("labelEmpty");
        label.classList.add("labelFull");
      }
    });
  }
}
ConditionAllFieldsChecked = false;
function AllFieldsFilled() {
  const forma = document.getElementById("registracija");
  forma.addEventListener("change", (e) => {
    ConditionAllFieldsChecked = true;
    const allElements = document.getElementsByClassName("form__input");
    for (const element of allElements) {
      if (!element.checkValidity()) {
        ConditionAllFieldsChecked = false;
      }
    }
  });
}
ConditionMatchingPasswords = false;
function matchingPasswordsCheck() {
  const lozinkaInput = document.getElementById("inputLozinka");
  const potvrdaLozinkeInput = document.getElementById("inputPotvrdaLozinke");
  potvrdaLozinkeInput.addEventListener("change", (e) => {
    let lozinka = document.forms["form1"]["Lozinka"].value;
    let potvrdaLozinke = document.forms["form1"]["PotvrdaLozinke"].value;
    let errorMessagePassMatch = document.getElementById(
      "errorMessagePassMatch"
    );
    if (lozinka !== potvrdaLozinke) {
      potvrdaLozinkeInput.classList.add("form__input-error");
      errorMessagePassMatch.style.display = "block";
      ConditionMatchingPasswords = false;
    } else {
      errorMessagePassMatch.style.display = "none";
      ConditionMatchingPasswords = true;
    }
  });
  lozinkaInput.addEventListener("change", (e) => {
    let lozinka = document.forms["form1"]["Lozinka"].value;
    let potvrdaLozinke = document.forms["form1"]["PotvrdaLozinke"].value;
    let errorMessagePassMatch = document.getElementById(
      "errorMessagePassMatch"
    );
    if (lozinka !== potvrdaLozinke && potvrdaLozinke != "") {
      potvrdaLozinkeInput.classList.add("form__input-error");
      errorMessagePassMatch.style.display = "block";
      ConditionMatchingPasswords = false;
    } else {
      errorMessagePassMatch.style.display = "none";
      ConditionMatchingPasswords = true;
      potvrdaLozinkeInput.classList.remove("form__input-error");
    }
  });
}
function showPassword() {
  const showPasswordEye = document.getElementById("passwordEye1");
  const showPasswordEye2 = document.getElementById("passwordEye2");
  const lozinkaInput = document.getElementById("inputLozinka");
  const potvrdaLozinkeInput = document.getElementById("inputPotvrdaLozinke");
  showPasswordEye.addEventListener("click", (e) => {
    if (lozinkaInput.type === "password") {
      lozinkaInput.type = "text";
      showPasswordEye.style.color = "rgb(125, 177, 255)";
    } else {
      lozinkaInput.type = "password";
      showPasswordEye.style.color = "rgb(180, 180, 180)";
    }
  });
  showPasswordEye2.addEventListener("click", (e) => {
    if (potvrdaLozinkeInput.type === "password") {
      potvrdaLozinkeInput.type = "text";
      showPasswordEye2.style.color = "rgb(125, 177, 255)";
    } else {
      potvrdaLozinkeInput.type = "password";
      showPasswordEye2.style.color = "rgb(180, 180, 180)";
    }
  });
}

ConditionCheckbox = false;
function checkboxStatus() {
  const checkboxConditions = document.getElementById("checkbox");
  checkboxConditions.addEventListener("change", (e) => {
    if (checkboxConditions.checked) {
      errorMessageCheckbox.style.color = "rgb(180,180,180)";
      ConditionCheckbox = true;
    } else {
      errorMessageCheckbox.style.color = "red";
      ConditionCheckbox = false;
    }
  });
}
requiredFieldsCheck();
matchingPasswordsCheck();
checkboxStatus();
AllFieldsFilled();
showPassword();
const registerBtn = document.getElementById("registerBtn");
registerBtn.disabled = true;
function forma() {
  const forma = document.getElementById("registracija");
  const errorMessageAllFields = document.getElementById(
    "errorMessageAllFields"
  );
  forma.addEventListener("change", (e) => {
    e.preventDefault();
    matchingPasswordsCheck();
    checkboxStatus();
    AllFieldsFilled();
    const registerBtn = document.getElementById("registerBtn");
    if (
      ConditionAllFieldsChecked == true &&
      ConditionCheckbox == true &&
      ConditionMatchingPasswords == true
    ) {
      registerBtn.style.backgroundColor = "rgb(125, 177, 255)";
      registerBtn.disabled = false;
      errorMessageAllFields.style.display = "none";
    } else {
      registerBtn.style.backgroundColor = "rgb(180, 180, 180)";
      registerBtn.disabled = true;
    }
  });
}
forma();

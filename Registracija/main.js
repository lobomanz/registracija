let EmptyFieldsCounter = 0;
function emptyFieldsCheck(inputField, fieldName, fieldLabel) {
  const inputValue = document.getElementById(inputField);
  const label = document.getElementById(fieldLabel);
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
    let empt = document.forms["form1"][fieldName].value;
    if (empt == "") {
      inputValue.classList.add("form__input-error");
      label.classList.remove("labelFull");
      label.classList.add("labelEmpty");
      errorMessageAllFields.style.display = "block";
      EmptyFieldsCounter++;
    } else {
      inputValue.classList.remove("form__input-error");
      label.classList.remove("labelEmpty");
      label.classList.add("labelFull");
      EmptyFieldsCounter--;
      if (EmptyFieldsCounter <= -5) {
        errorMessageAllFields.style.display = "none";
      }
    }
  });
}
ConditionAllFieldsChecked = false;
function AllFieldsFilled() {
  const forma = document.getElementById("registracija");
  forma.addEventListener("change", (e) => {
    let ime = document.forms["form1"]["ime1"].value;
    let prezime = document.forms["form1"]["prezime1"].value;
    let email = document.forms["form1"]["email1"].value;
    let lozinka = document.forms["form1"]["lozinka1"].value;
    let potvrdaLozinke = document.forms["form1"]["potvrdaLozinke1"].value;
    if (
      ime != "" &&
      prezime != "" &&
      email != "" &&
      lozinka != "" &&
      potvrdaLozinke != ""
    ) {
      ConditionAllFieldsChecked = true;
    } else {
      ConditionAllFieldsChecked = false;
    }
  });
}
ConditionMatchingPasswords = false;
function matchingPasswordsCheck() {
  const lozinkaInput = document.getElementById("inputLozinka");
  const potvrdaLozinkeInput = document.getElementById("inputPotvrdaLozinke");
  potvrdaLozinkeInput.addEventListener("change", (e) => {
    let lozinka = document.forms["form1"]["lozinka1"].value;
    let potvrdaLozinke = document.forms["form1"]["potvrdaLozinke1"].value;
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
    let lozinka = document.forms["form1"]["lozinka1"].value;
    let potvrdaLozinke = document.forms["form1"]["potvrdaLozinke1"].value;
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
ConditionPasswordLength = false;
function passwordLengthCheck() {
  const lozinkaInput = document.getElementById("inputLozinka");

  lozinkaInput.addEventListener("change", (e) => {
    let lozinka = document.forms["form1"]["lozinka1"].value;
    const errorMessagePassLength = document.getElementById(
      "errorMessagePassLength"
    );
    if (lozinka.length < 6 || lozinka.length > 9) {
      lozinkaInput.classList.add("form__input-error");
      errorMessagePassLength.style.display = "block";
      ConditionPasswordLength = false;
    } else {
      lozinkaInput.classList.remove("form__input-error");
      errorMessagePassLength.style.display = "none";
      ConditionPasswordLength = true;
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
ConditionEmailFormat = false;
function emailFormatCheck() {
  const emailInput = document.getElementById("inputEmail");
  let errorMessageEmailFormat = document.getElementById(
    "errorMessageEmailFormat"
  );
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  emailInput.addEventListener("focusout", (e) => {
    if (emailInput.value == "") {
      errorMessageEmailFormat.style.display = "none";
      ConditionEmailFormat = false;
    } else if (!emailInput.value.match(validRegex)) {
      errorMessageEmailFormat.style.display = "block";
      emailInput.classList.add("form__input-error");
      ConditionEmailFormat = false;
    } else {
      errorMessageEmailFormat.style.display = "none";
      emailInput.classList.remove("form__input-error");
      ConditionEmailFormat = true;
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
idList = [
  "inputIme",
  "inputPrezime",
  "inputEmail",
  "inputLozinka",
  "inputPotvrdaLozinke",
];
nameList = ["ime1", "prezime1", "email1", "lozinka1", "potvrdaLozinke1"];
labelList = [
  "labelIme",
  "labelPrezime",
  "labelEmail",
  "labelLozinka",
  "labelPotvrdaLozinke",
];
for (i in idList) {
  emptyFieldsCheck(idList[i], nameList[i], labelList[i]);
}
matchingPasswordsCheck();
passwordLengthCheck();
emailFormatCheck();
checkboxStatus();
AllFieldsFilled();
showPassword();
const registerBtn = document.getElementById("registerBtn");
registerBtn.disabled = true;
function forma() {
  const forma = document.getElementById("registracija");
  forma.addEventListener("change", (e) => {
    e.preventDefault();
    matchingPasswordsCheck();
    passwordLengthCheck();
    emailFormatCheck();
    checkboxStatus();
    AllFieldsFilled();
    const registerBtn = document.getElementById("registerBtn");
    if (
      ConditionAllFieldsChecked == true &&
      ConditionCheckbox == true &&
      ConditionEmailFormat == true &&
      ConditionPasswordLength == true &&
      ConditionMatchingPasswords == true
    ) {
      registerBtn.style.backgroundColor = "rgb(125, 177, 255)";
      registerBtn.disabled = false;
    } else {
      registerBtn.style.backgroundColor = "rgb(180, 180, 180)";
      registerBtn.disabled = true;
    }
  });
}
forma();

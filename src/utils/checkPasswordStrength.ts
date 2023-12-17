const checkPasswordStrength = (password: string, ref)=> {
    let strength = 0;

    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 1;
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
      strength += 1;
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      strength += 1;
    }

    //If password is greater than 7
    if (password.length > 7) {
      strength += 1;
    }

    // If value is less than 2
    if (strength < 2 && password.length > 0) {
      ref.current?.childNodes.forEach((node, index) => {
        if (index < 2) {
          node.classList.remove("bg-gray-300");
          node.classList.add("bg-red-600");
        } else if (index >= 2) {
          node.classList.remove("bg-yellow-600");
          node.classList.add("bg-gray-300");
        }
      });
    } else if (strength == 3) {
      ref.current?.childNodes.forEach((node, index) => {
        if (index < 2) {
          node.classList.remove("bg-gray-300");
          node.classList.add("bg-red-600");
        }
        if (index >= 2 && index < 4) {
          node.classList.remove("bg-gray-300");
          node.classList.add("bg-yellow-600");
        } else if (index >= 4) {
          node.classList.remove("bg-green-600");
          node.classList.add("bg-gray-300");
        }
      });
    } else if (strength == 4) {
      ref.current?.childNodes.forEach((node, index) => {
        if (index < 2) {
          node.classList.remove("bg-gray-300");
          node.classList.add("bg-red-600");
        }
        if (index >= 2 && index < 4) {
          node.classList.remove("bg-gray-300");
          node.classList.add("bg-yellow-600");
        }
        if (index >= 4 && index < 6) {
          node.classList.remove("bg-gray-300");
          node.classList.add("bg-green-600");
        }
      });
    } else if (strength == 0) {
      ref.current?.childNodes.forEach((node) => {
        node.classList.remove("bg-red-600");
        node.classList.remove("bg-green-600");
        node.classList.remove("bg-yellow-600");
        node.classList.add("bg-gray-300");
      });
    }
}
  
export default checkPasswordStrength;